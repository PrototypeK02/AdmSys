import Swal from "sweetalert2";
import "animate.css";
const searchDate = (dispatch, date, setAllData, backUp, setTable) => {
  const data = backUp.filter((el) => el.date === date);
  if (!data.length) {
    return Swal.fire({
      icon: "error",
      title: "No hay registros en la fecha indicada",
      showClass: {
        popup: "animate__bounceIn",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    dispatch(setAllData(data));
    dispatch(setTable(true));
  }
};

export default searchDate;
