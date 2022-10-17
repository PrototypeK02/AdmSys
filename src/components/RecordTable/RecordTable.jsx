import React from "react";
import "./RecordTable.css";
const RecordTable = ({ allData }) => {
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
          </tr>
        </thead>

        {allData && (
          <tbody>
            {allData && console.log(allData)}
            {allData.map((el, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "table-row-gray" : "table-row-dark"}
              >
                <td>{el.article}</td>
                <td>{el.unit}</td>
                <td>{el.unitfull}</td>
                <td>{el.quantity}</td>
                <td>{el.date}</td>
                <td>{(el.unitfull - el.unit) * el.quantity}</td>
                <td>{el.quantity * el.unitfull}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default RecordTable;
