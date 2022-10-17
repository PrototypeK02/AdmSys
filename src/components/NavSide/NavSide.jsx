import React, { useRef } from "react";
import "./NavSide.css";
import searchDate from "../../actions/searchDate";
const NavSide = ({ setModal, setAllData, backUp, setTable }) => {
  const dateref = useRef(null);
  return (
    <div>
      <aside className="sideNav">
        <h3 onClick={() => setModal(true)}>Crear Registro</h3>

        <div className="date-container">
          <h3>Buscar por Fecha</h3>
          <input ref={dateref} type="date" />
          <button
            className="date-button-search"
            onClick={() =>
              searchDate(dateref.current.value, setAllData, backUp, setTable)
            }
          >
            Search
          </button>
        </div>

        <h3 onClick={() => setTable(true)}>Mostrar Todos</h3>
      </aside>
    </div>
  );
};

export default NavSide;
