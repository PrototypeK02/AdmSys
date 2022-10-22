import {
  doc,
  setDoc,
  deleteDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { setModal, setUpdate } from "../redux/slices";

import Swal from "sweetalert2";

export const handleRecord = async (dispatch, user, data, id, value) => {
  if (value === "Modificar") {
    dispatch(setUpdate(true));
    dispatch(setModal(true));
    const docRef = doc(db, user.email, id);
    await setDoc(docRef, data, { merge: true });
    dispatch(setModal(false));
    dispatch(setUpdate(false));
  } else if (value === "Borrar") {
    await deleteDoc(doc(db, user.email, id));
  } else {
    if (!user) {
      return Swal.fire({
        icon: "error",
        text: "Por favor ingresa con tu usuario.",
      });
    }
    if (
      !data.article ||
      data.article === "Articulo" ||
      !data.unit ||
      !data.unitfull ||
      !data.quantity
    ) {
      return Swal.fire({
        icon: "error",
        title: "Faltan parametros...",
        text: "Algunos elementos no han sido agregados",
      });
    }
    try {
      await addDoc(collection(db, `${user.email}`), {
        ...data,
        date: new Date().toISOString().split("T")[0],
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  }
};
