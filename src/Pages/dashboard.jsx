import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Drawer from "../components/drawer";

export default function Dashboard() {
  const [info, setInfo] = useState("");

  const GetInfo = async () => {
    try {
      const response = await fetch(`https://rfidtaptogo.vercel.app/api/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setInfo(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  useEffect(() => {
    GetInfo();
  }, []);

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.name,
    },
    {
      name: "Correo electronico",
      selector: (row) => row.email,
    },
    {
      name: "Numero de tarjeta",
      selector: (row) => row.rfid,
    },
    {
      name: "Saldo",
      selector: (row) => row.saldo,
    },
    {
      name: "status",
      selector: (row) => row.status,
      cell: (row) =>
        row.status === true ? (
          <p className="text-success">activo</p>
        ) : (
          <p className="text-error">inactivo</p>
        ),
    },
  ];

  return (
    <div>
      <Drawer />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-3/5">
          <h1 className="text-start text-2xl font-bold text-blueForm">Usuarios</h1>
        </div>
        <div className="flex flex-col h-3/5 w-4/6 justify-center items-center p-4 shadow-xl">
          {info ? (
            <DataTable columns={columns} data={info} pagination />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
