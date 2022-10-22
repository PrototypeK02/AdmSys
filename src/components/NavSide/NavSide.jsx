import React, { useRef } from "react";
import "./NavSide.css";
import searchDate from "../../actions/searchDate";
import { useSelector, useDispatch } from "react-redux";
import {
  setModal,
  setAllData,
  setTable,
  setUpdate,
  setStatus,
} from "../../redux/slices";
const NavSide = () => {
  const dispatch = useDispatch();
  const backUp = useSelector((state) => state.recordsSlice.recordBackUp);
  const dateref = useRef(null);
  return (
    <div>
      <aside className="sideNav">
        <h3
          onClick={() => {
            dispatch(setUpdate(false));
            dispatch(setModal(true));
            dispatch(setStatus("Crear"));
          }}
        >
          Crear Registro
        </h3>

        <div className="date-container">
          <h3>Buscar por Fecha</h3>
          <input ref={dateref} type="date" />
          <button
            className="date-button-search"
            onClick={() =>
              dispatch(
                searchDate(
                  dispatch,
                  dateref.current.value,
                  setAllData,
                  backUp,
                  setTable
                )
              )
            }
          >
            Search
          </button>
        </div>

        <h3 onClick={() => dispatch(setTable(true))}>Mostrar Todos</h3>
      </aside>
    </div>
  );
};

export default NavSide;
