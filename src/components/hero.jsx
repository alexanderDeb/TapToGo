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
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="flex justify-center items-center bg-blueForm rounded-xl h-12 w-32 hover:bg-blueSecond transition-colors duration-300">Get Started</button>
        </div>
      </div>
    </div>
  );
}
