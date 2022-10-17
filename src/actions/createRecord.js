import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";
const createRecord = async (doc) => {
  if (
    !doc.article ||
    doc.article === "Articulo" ||
    !doc.unit ||
    !doc.unitfull ||
    !doc.quantity
  ) {
    Swal.fire({
      icon: "error",
      title: "Faltan parametros...",
      text: "Algunos elementos no han sido agregados",
    });
  }
  try {
    await addDoc(collection(db, "miki/"), {
      ...doc,
      date: new Date().toISOString().split("T")[0],
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
  }
};

export default createRecord;
