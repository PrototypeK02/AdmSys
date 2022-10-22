import React, { useRef } from "react";
import "./ModalCreate.css";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../redux/slices";
import { handleRecord } from "../../actions/handleRecord";
const ModalCreate = ({ user }) => {
  const title = useSelector((state) => state.recordsSlice.updateModal);
  const id = useSelector((state) => state.recordsSlice.docId);
  const recordValue = useSelector((state) => state.recordsSlice.recordStatus);
  const dispatch = useDispatch();
  const article = useRef(null);
  const unit = useRef(null);
  const unitfull = useRef(null);
  const quantity = useRef(null);
  return (
    <>
      <div className="layout"></div>
      <form>
        <h1>{!title ? "Nuevo Registro" : "Actualizar Registro"}</h1>
        <select ref={article}>
          <option className="base">Articulo</option>
          <option>G</option>
          <option>Browniee</option>
        </select>
        <input ref={unit} type="number" placeholder="Precio unidad" />
        <input
          ref={unitfull}
          type="number"
          placeholder="Precio total unitario"
        />
        <input ref={quantity} type="number" placeholder="Cantidad" />

        <div className="container-btn">
          <button
            onClick={() => dispatch(setModal(false))}
            className="form-btn-cancel"
          >
            Cancel
          </button>
          <button
            className="form-btn-save"
            onClick={(e) => {
              e.preventDefault();
              console.log(id, recordValue);
              handleRecord(
                dispatch,
                user,
                {
                  article: article.current.value,
                  unit: unit.current.value,
                  unitfull: unitfull.current.value,
                  quantity: quantity.current.value,
                },
                id,
                recordValue
              );
            }}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default ModalCreate;
