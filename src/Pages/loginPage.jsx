import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {

  let navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handlerSubmit = () => {
    sessionStorage.setItem("email", Email);
    sessionStorage.setItem("password", Password);
    navigate("/dashboard", { replace: true });
  };



  useEffect(() => {
    document.title = "Inicio de sesión";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl p-6 bg-blueForm rounded-lg">
        <h2 className="text-center text-2xl text-base-100 font-bold mb-6">
          Inicio de sesión
        </h2>

        <form  onSubmit={handlerSubmit} className="space-y-10">
          <div className="mb-4">
            <label
              className="block text-left text-base-100"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-left text-base-100"
            >
              Contraseña 
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 rounded-full bg-BTN text-base-100 font-bold rounded-md  hover:bg-BTNHover transition duration-200"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
