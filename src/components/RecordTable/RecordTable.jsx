import React from "react";
import "./RecordTable.css";
import { useSelector, useDispatch } from "react-redux";
import { setId, setModal, setUpdate, setStatus } from "../../redux/slices";
import { handleRecord } from "../../actions/handleRecord";
const RecordTable = ({ user }) => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.recordsSlice.records);
  const id = useSelector((state) => state.recordsSlice.docId);
  const recordValue = useSelector((state) => state.recordsSlice.recordStatus);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Articulo</strong>
            </td>
            <td>
              <strong>Costo Unidad</strong>
            </td>
            <td>
              <strong>Precio total unitario</strong>
            </td>
            <td>
              <strong>Cantidad</strong>
            </td>
            <td>
              <strong>Fecha</strong>
            </td>
            <td>
              <strong>Ganancias</strong>
            </td>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>Acciones</strong>
            </td>
          </tr>
        </thead>

        {allData && (
          <tbody>
            {allData.map((el, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "table-row-gray" : "table-row-dark"}
              >
                <td>{el.data.article}</td>
                <td>{el.data.unit}</td>
                <td>{el.data.unitfull}</td>
                <td>{el.data.quantity}</td>
                <td>{el.data.date}</td>
                <td>{(el.data.unitfull - el.data.unit) * el.data.quantity}</td>
                <td>{el.data.quantity * el.data.unitfull}</td>
                <td>
                  <select
                    className="select"
                    onChange={(e) => {
                      dispatch(setId(el.id));
                      dispatch(setStatus(e.target.value));
                      e.target.value === "Modificar" ||
                      e.target.value === "Crear"
                        ? dispatch(setUpdate(true)) && dispatch(setModal(true))
                        : handleRecord(null, user, null, id, recordValue);
                    }}
                  >
                    <option className="select-option-hidden"></option>
                    <option>Borrar</option>
                    <option>Modificar</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default RecordTable;
