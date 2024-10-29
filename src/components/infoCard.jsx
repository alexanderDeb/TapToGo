import React from "react";

export default function InfoCard({ image, title, description }) {
  return (
    <div className="card bg-base-100 w-full md:w-1/4 shadow-xl">
      <figure>
        <img src={image} alt="Mio" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blueForm">{title}</h2>
        <p className="text-slate_600">{description}</p>
      </div>
    </div>
  );
}
