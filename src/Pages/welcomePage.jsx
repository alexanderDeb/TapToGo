import React from "react";
import Navbar from "../components/navbar";
import Bus from "../assets/Bus.png";
import InfoCard from "../components/infoCard";
import Footer from "../components/footer";
import Card1 from "../assets/Card1.png"
import Card2 from "../assets/Card2.jpg"
import Card3 from "../assets/Card3.jpg"

export default function WelcomePage() {
  return (
    <div className="flex flex-col space-y-40 bg-slate_100">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <div className="h-1/4 w-1/2">
          <img src={Bus} alt="..." className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-6">
        <h1 className="text-blueForm font-extrabold text-3xl">Noticias</h1>
        <h1 className="text-xl">Enterate de las ultimas noticias</h1>
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
      <Footer />
    </div>
  );
}
