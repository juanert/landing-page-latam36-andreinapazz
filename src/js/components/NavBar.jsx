import React from "react";
import "../../styles/navbar.css";

function NavBar() {
  return (
    <>
      <nav>
        <div>
          <h1>Logo</h1>
        </div>
        <div className="menu-contenedor">
          <div className="menu-escritorio menu">
            <p>Concierto</p>
            <p>Turismo</p>
            <p>Teatro</p>
            <p>Museo</p>
            <p>Infantil</p>
            <p>Vida nocturna</p>
          </div>
        </div>
        <div>
          <button className="menu-responsive">X</button>
          <div className="menu-escritorio">
            <button className="login">Incia sesión</button>
            <button>JR</button>
          </div>
        </div>
      </nav>
      <div className="menu-desplegable hidden">
        <p>Concierto</p>
        <p>Turismo</p>
        <p>Teatro</p>
        <p>Museo</p>
        <p>Infantil</p>
        <p>Vida nocturna</p>
        <button className="login">Incia sesión</button>
      </div>
    </>
  );
}

export default NavBar;
