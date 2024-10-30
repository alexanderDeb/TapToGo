import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <div className="navbar bg-blueForm py-4 h-20 absolute shadow-md">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl text-base-100 font-semibold"
          href="/"
        >
          TapToGo
        </a>
      </div>
      <div className="flex-none">
        <button
          className="flex justify-center items-center h-12 w-32 bg-blueSecond rounded-lg text-base-100 transition-colors duration-300 hover:bg-blueSecondHover"
          onClick={() => {
            //Maneja el evento y posteriormente cambia a la pagina de inicio de sesion
            navigate("/login");
          }}
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}
