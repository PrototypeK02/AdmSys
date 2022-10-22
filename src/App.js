import { useEffect } from "react";
import ModalCreate from "./components/Create/ModalCreate";
import NavBar from "./components/NavBar/NavBar";
import NavSide from "./components/NavSide/NavSide";
import RecordTable from "./components/RecordTable/RecordTable";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAllData } from "./redux/slices";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
function App() {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const table = useSelector((state) => state.recordsSlice.table);
  const modal = useSelector((state) => state.recordsSlice.modal);
  useEffect(() => {
    const querySnapshot = query(
      collection(db, `${user?.email}`),
      orderBy("timestamp")
    );
    const unsuscribe = onSnapshot(querySnapshot, (query) => {
      const send = [];
      query.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        send.push({ id: doc.id, data: doc.data() });
      });

      dispatch(setAllData(send));
    });
    return () => unsuscribe();
  }, [dispatch, user]);
  return (
    <>
      <NavBar />
      <div className="container">
        <NavSide />
        <div className="circle">
          <img
            src="https://i.pinimg.com/474x/81/35/6c/81356c31a043cf8d8aef04f9cfce8f2f.jpg"
            alt=""
          />
        </div>
      </div>

      {table && <RecordTable user={user} />}
      {modal && <ModalCreate user={user} />}
    </>
  );
}

export default App;
