import React, { useState } from "react";
import { FaGripLines, FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(1);
  return (
    <div className="h-screen w-screen absolute z-40 transition duration-150">
      {isOpen === 0 ? (
        <div className="flex flex-col w-1/6 h-full bg-blueForm">
          <div className="flex flex-row h-1/3 w-full justify-between items-start px-8 pt-4">
            <h1 className="text-white font-bold text-xl">TapToGo</h1>
            <button
              className="text-white font-extrabold text-2xl"
              onClick={() => {
                setIsOpen(1);
              }}
            >
              X
            </button>
          </div>
          <div className="flex flex-col h-1/3 w-full"></div>
          <div className="flex flex-col h-1/3 w-full"></div>
        </div>
      ) : (
        <div className="flex flex-col bg-blueForm h-full w-20">
          <div className="flex flex-row h-1/3 w-full justify-center items-start pt-4">
            <button
              onClick={() => {
                setIsOpen(0);
              }}
              className="flex flex-col text-white h-10 w-full justify-center items-center"
            >
              <FaGripLines size={24} className="fill-current" />
            </button>
          </div>
          <div className="flex flex-col h-1/3 w-full space-y-12">
            <div className="flex flex-col justify-center items-center">
              <button onClick={() => setIsOpen(0)} className="text-white">
                <IoHomeOutline size={24} className="fill-current" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button onClick={() => setIsOpen(0)} className="text-white">
                {" "}
                <FaRegUser size={24} className="fill-current" />
              </button>
            </div>
          </div>
          <div className="flex flex-col h-1/3 w-full justify-end items-center pb-4">
            <button
              className="text-white"
              onClick={() => {
                sessionStorage.clear();
              }}
            >
              < IoIosLogOut size={24} className="fill-current" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
