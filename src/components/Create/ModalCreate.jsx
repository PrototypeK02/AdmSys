import React, { useRef } from "react";
import "./ModalCreate.css";
import createRecord from "../../actions/createRecord";

const ModalCreate = ({ setModal }) => {
  const article = useRef(null);
  const unit = useRef(null);
  const unitfull = useRef(null);
  const quantity = useRef(null);
  return (
    <>
      <div className="layout"></div>
      <form>
        <h1>Nuevo Registro</h1>
        <select ref={article}>
          <option className="base">Articulo</option>
          <option>G</option>
          <option>Brownie</option>
        </select>

        <input ref={unit} type="number" placeholder="Precio unidad" />
        <input
          ref={unitfull}
          type="number"
          placeholder="Precio total unitario"
        />
        <input ref={quantity} type="number" placeholder="Cantidad" />

        <div className="container-btn">
          <button onClick={() => setModal(false)} className="form-btn-cancel">
            Cancel
          </button>
          <button
            className="form-btn-save"
            onClick={() => {
              createRecord({
                article: article.current.value,
                unit: unit.current.value,
                unitfull: unitfull.current.value,
                quantity: quantity.current.value,
              });
              setModal(false);
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
