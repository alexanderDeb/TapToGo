import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Estados del formulario
export default function Register() {
    let navigate = useNavigate();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Role, setRole] = useState("");
    const [Status, setStatus] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    //URL del registro en la API
    const register_URL = ""; 

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

    }


}

