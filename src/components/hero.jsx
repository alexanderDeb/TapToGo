import React from "react";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://imagenes.eltiempo.com/files/image_1200_600/uploads/2021/11/29/61a4fc7217f4d.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="flex flex-col max-w-md items-center">
          <h1 className="mb-5 text-5xl font-bold">¡Bienvenido!</h1>
          <p className="mb-5">
            Conoce las últimas noticias sobre el MIO y mantente informado de
            todo lo que sucede en el sistema de transporte masivo de la ciudad.
          </p>
          <a href="#Noticias" className="flex justify-center items-center bg-BTN rounded-xl h-12 w-32 hover:bg-BTNHover transition-colors duration-300 text-white font-bold">
            Empezar
          </a>
        </div>
      </div>
    </div>
  );
}
