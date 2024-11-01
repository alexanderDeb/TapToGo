import React, { useState, useEffect } from "react";
import Drawer from "../components/drawer";
import StatsCard from "../components/statsCard";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

export default function Stadistics() {
  Chart.register(CategoryScale);
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

  if (info.length !== 0) {
    info.map((data) => {
      console.log(data.name);
    });
  }
  return (
    <div className="flex flex-col h-screen w-screen">
      <Drawer />
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-row h-1/4 w-full justify-center items-center gap-8">
          <StatsCard
            title="hola"
            value="77"
            message="hola mundo"
            color="#dc2626"
          />
          <StatsCard
            title="hola"
            value="77"
            message="hola mundo"
            color="#dc2626"
          />
          <StatsCard
            title="hola"
            value="77"
            message="hola mundo"
            color="#dc2626"
          />
        </div>
        <div className="flex h-3/4 justify-center items-center py-20">
          {info.length !== 0 ? (
            <Line
              data={{
                labels: info.map((data) => data.name),
                datasets: [
                  {
                    label: "Saldo por usuario",
                    data: info.map((data) => data.saldo),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                  },
                ],
              }}
            />
          ) : (
            <div className="flex h-3/4 justify-center items-center">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
