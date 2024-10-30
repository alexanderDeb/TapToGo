import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

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
      cell: (row) => (row.status == true ? <p className="text-success">activo</p> : <p className="text-error">inactivo</p>),
    },
  ];

  const activeOrInactive = [{ when: (row) => row.status == true }];

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col h-4/5 w-5/6 justify-center items-center">
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
