import { React, useEffect } from "react";import Navbar from "../components/navbar";
import celular from "../assets/celular.png";
import InfoCard from "../components/infoCard";
import Footer from "../components/footer";
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.jpg";
import Card3 from "../assets/Card3.jpg";
import Hero from "../components/hero";

export default function WelcomePage() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <div className="flex flex-col bg-slate_100">
      <Navbar />
      <Hero />
      <div className="flex flex-col h-screen space-y-40 pt-40" id="Noticias">
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="text-blueForm font-extrabold text-3xl">Noticias</h1>
          <h1 className="text-xl">
            ¡Entérate de las últimas noticias sobre el MIO!
          </h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 px-6 justify-between items-center md:px-32">
          <InfoCard
            image={Card1}
            title="Innovación en el Transporte"
            description="Se celebró un evento donde jóvenes presentaron soluciones para mejorar el transporte público, destacando la importancia de la participación comunitaria en la creación de aplicaciones más eficientes."
          />
          <InfoCard
            image={Card2}
            title="Movilidad Inclusiva y Sostenible"
            description="Una nueva agenda de investigación promueve el uso de aplicaciones móviles que favorezcan la inclusión y sostenibilidad, lo cual es clave para aumentar la aceptación del servicio entre todos los usuarios."
          />
          <InfoCard
            image={Card3}
            title="Uso de Tecnología Avanzada"
            description="La implementación de tecnologías inteligentes, como sistemas de localización por Bluetooth, está mejorando la experiencia del usuario al ofrecer información en tiempo real y optimizar la gestión de rutas."
          />
        </div>
      </div>
      <div className="flex flex-col h-screen">
        <div className="flex flex-row h-full w-full justify-between items-center px-20">
          <div className="flex w-1/2 h-full justify-center items-center">
            <div className=" flex h-1/2 max-w-xs justify-center items-center">
              <img src={celular} alt="..." className="w-3/4 h-auto"/>
            </div>
          </div>
          <div className="flex w-1/2 h-full justify-center items-center">
            <div className="">
              <h1 className="text-2xl font-semibold">
                ¿Eres usuario de nuestro trasporte?
              </h1>
              <p>
                Presiona el botón a continuación para descargar nuestro
                aplicativo móvil y optimiza tu experiencia en el MIO con un solo
                toque.{" "}
              </p>
              <div className="flex flex-col items-center pt-5 space-y-2">
                <a href= "https://expo.dev/artifacts/eas/xAtnZQdjk9J9ctRRshCHT6.apk" className="flex justify-center items-center  text-white h-12 w-36 bg-blueForm rounded-lg hover:bg-blueSecond">
                  Descarga aqui
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
