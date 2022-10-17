import { useEffect, useState } from "react";
import ModalCreate from "./components/Create/ModalCreate";
import NavBar from "./components/NavBar/NavBar";
import NavSide from "./components/NavSide/NavSide";
import RecordTable from "./components/RecordTable/RecordTable";
import "./index.css";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [modal, setModal] = useState(false);
  const [table, setTable] = useState(false);
  const [allData, setAllData] = useState([]);
  const [backUp, setBackUp] = useState([]);

  useEffect(() => {
    const querySnapshot = query(collection(db, "miki"), orderBy("timestamp"));
    const unsuscribe = onSnapshot(querySnapshot, (query) => {
      const send = [];
      query.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        send.push(doc.data());
      });
      setAllData(send);
      setBackUp(send);
    });

    return () => unsuscribe();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container">
        <NavSide
          setModal={setModal}
          setAllData={setAllData}
          backUp={backUp}
          setTable={setTable}
        />
        <div className="circle">
          <img
            src="https://i.pinimg.com/474x/81/35/6c/81356c31a043cf8d8aef04f9cfce8f2f.jpg"
            alt=""
          />
        </div>
      </div>
      {table && <RecordTable allData={allData} />}
      {modal && <ModalCreate setModal={setModal} />}
    </div>
  );
}

export default App;
