import React from "react";
import "./NavBar.css";
import LogIn from "../LogIn";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="nav">
      <h1>AdmiNeutracion</h1>
      <div className="container-menu">
        {!user && <LogIn />}
        {user && (
          <h4 className="" onClick={() => console.log("asd")}>
            Ver Administracion
          </h4>
        )}
        {user && (
          <div className="submenu">
            <button>Promedio ultimos 3 dias</button>
            <button>Promedio ultima semana</button>
            <button>Promedio ultimo Mes</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
