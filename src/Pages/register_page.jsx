import { React, useState} from "react";
// import { useNavigate } from "react-router-dom";

//Estados del formulario
export default function Register() {
    // let navigate = useNavigate();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Role, setRole] = useState("");
    const [Status, setStatus] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    //URL del registro en la API
    const register_URL = "https://rfidtaptogo.vercel.app/api/user"; 

    const handlerSubmit = async (e) => {
        //Evita que la pagina se recargue
        e.preventDefault();


        if (Password == ConfirmPassword) {
            try {
                 //Datos que se envian al API
                const UserData = {name: Name, email: Email, role: Role, status: Status, password: Password};
                const response = await fetch(register_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "same-origin",
                    body: JSON.stringify( UserData ),
                })
                //respuesta 
                const ResponseJson = await response.json()
                if (response.status == 201) {
                    alert("Se registro el usuario exitosamente")
                } else {
                    alert("No se pudo registar el usuario. ")
                } 

            } catch (error) {
                console.error(error)
                return 0
            }
        
        } else {
            alert("Las contraseñas no coinciden. ")
        }

    };
    return (
      <div className="min-h-screen flex items-center justify-center ">
        {/* w-full ocupara todo el espacio horizontal del contenedor */}
        {/* max-w-xl ancho máximo para el elemento */}

        <div className="bg-blueForm p-8 rounded-lg shadow-lg w-full max-w-xl">
          <p className="text-base-100 text-center font-bold mb-4">
            Ingresa los siguientes datos para registrar un administrador o
            usuario
          </p>
          <form onSubmit={handlerSubmit} className="space-y-4">
            <div>
              <label className="block text-left text-base-100">Nombre</label>
              <input
                type="text"
                value={Name}
                //onChange: Este es un evento que se dispara cada vez que el valor de un elemento de formulario cambia
                // setName es una función de actualización de estado proporcionada por el hook useState
                //e.target.value obtiene el valor actual del campo de entrada
                onChange={(e) => setName(e.target.value)}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-left text-base-100">Correo</label>
              <input
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-full">
                <label className="block text-left text-base-100">Rol</label>
                <select
                  value={Role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="input input-bordered w-full"
                >
                  <option value="" disabled>
                    Selecciona un rol
                  </option>
                  <option value="Usuario">Usuario</option>
                  <option value="Administrador">Administrador</option>
                </select>
              </div>

              <div className="w-full">
                <label className="block text-left text-base-100">Estado</label>
                <select
                  value={Status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  className="input input-bordered w-full"
                >
                  <option value="" disabled>
                    Selecciona un estado
                  </option>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </div>
            
            {/* // flex space-x-4 para que ambos campos estén alineados horizontalmente. */}
            <div className="flex space-x-4">
              <div className="w-full">
                <label className="block text-left text-base-100">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  // w-full en Tailwind CSS se utiliza para establecer el ancho completo de un elemento
                  className="input input-bordered w-full"
                />
              </div>

              <div className="w-full">
                <label className="block text-left text-base-100">
                  Repetir contraseña
                </label>
                <input
                  type="password"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="btn-circle w-full  bg-BTN hover:bg-BTNHover text-base-100 font-bold"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );


}

