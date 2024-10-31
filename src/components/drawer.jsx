import React, { useState } from "react";
import { FaGripLines, FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(1);
  let navigate = useNavigate();
  return (
    <div className="h-screen w-screen absolute z-40 transition duration-150">
      {isOpen === 0 ? (
        <div className="flex flex-col w-1/6 h-full bg-blueForm">
          <div className="flex flex-row h-1/3 w-full justify-between items-start px-8 pt-4">
            <h1 className="text-white font-bold text-2xl">TapToGo</h1>
            <button
              className="text-white font-extrabold text-2xl"
              onClick={() => {
                setIsOpen(1);
              }}
            >
              X
            </button>
          </div>

          <div className="flex flex-col h-1/3 w-full space-y-12 px-8">
            <div className="flex flex-col justify-center items-start">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/dashboard", { replace: true });
                }}
                className="flex items-center justify-start text-white gap-x-4 text-2xl hover:bg-blueSecondHover w-full h-14 px-2 rounded-xl"
              >
                <IoHomeOutline size={24} className="fill-current" />
                Inicio
              </button>
            </div>
            <div className="flex flex-col justify-center items-start">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/register", { replace: true });
                }}
                className="flex items-center justify-start text-white gap-x-4 text-2xl hover:bg-blueSecondHover w-full h-14 px-2 rounded-xl"
              >
                <FaRegUser size={24} className="fill-current" />
                Registro
              </button>
            </div>
          </div>
          <div className="flex flex-col h-1/3 w-full justify-end items-center pb-4 px-4">
            <button
              className="flex items-center justify-start text-white gap-x-4 text-2xl hover:bg-blueSecondHover w-full h-14 px-2 rounded-xl"
              onClick={() => {
                sessionStorage.clear();
              }}
            >
              <IoLogOutOutline size={26} className="fill-current" />
              Cerrar sesion
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col bg-blueForm h-full w-20">
          <div className="flex flex-row h-1/3 w-full justify-center items-start pt-4">
            <button
              onClick={() => {
                setIsOpen(0);
              }}
              className=" text-white hover:bg-blueSecondHover p-4 rounded-xl"
            >
              <FaGripLines size={24} className="fill-current" />
            </button>
          </div>
          <div className="flex flex-col h-1/3 w-full space-y-12">
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/dashboard", { replace: true });
                }}
                className="text-white hover:bg-blueSecondHover p-4 rounded-xl"
              >
                <IoHomeOutline size={24} className="fill-current" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => {
                  setIsOpen(0);
                  navigate("/register", { replace: true });
                }}
                className="text-white hover:bg-blueSecondHover p-4 rounded-xl"
              >
                {" "}
                <FaRegUser size={24} className="fill-current" />
              </button>
            </div>
          </div>
          <div className="flex flex-col h-1/3 w-full justify-end items-center pb-4">
            <button
              className="text-white hover:bg-blueSecondHover p-4 rounded-xl"
              onClick={() => {
                sessionStorage.clear();
              }}
            >
              <IoLogOutOutline size={26} className="fill-current" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
