import React from "react";
import { useNavigate} from "react-router-dom"

export default function Navbar() {

  let navigate = useNavigate();

  return (
    <div className="navbar bg-blueForm py-4 h-20">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-base-100 font-semibold" href="/">
          TapToGo
        </a>
      </div>
      <div className="flex-none">
        <button
          className="btn bg-blueSecond border border-blueSecond text-base-100 transition-colors duration-300 hover:bg-blueForm"
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