import React from "react";
import {replace, useNavigate} from "react-router-dom"

export default function Navbar() {

  let navigate = useNavigate();


  return (
    <div className="navbar bg-blueForm py-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-base-100 font-semibold">
          TapToGo
        </a>
      </div>
      <div className="flex-none">
        <button
          className="btn bg-BTN border border-BTN text-base-100 transition-colors duration-300 hover:bg-BTNHover"
          onClick={() => {
            //Maneja el evento y posteriormente cambia a la pagina de inicio de sesion
            //Con  el  {replace: true} evita que el usuario pueda volver atras
            navigate("/login", {replace: true});
          }} 
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}