import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="nav">
      <h1>AdmiNeutracion</h1>
      <div className="container-menu">
        <h4 className="" onClick={() => console.log("asd")}>
          Ver Administracion
        </h4>
        <div className="submenu">
          <button>Promedio ultimos 3 dias</button>
          <button>Promedio ultima semana</button>
          <button>Promedio ultimo Mes</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
