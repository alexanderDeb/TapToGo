import React from "react";
import { FaUser } from "react-icons/fa";

export default function StatsCard({ title, value, message, color }) {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <FaUser size={24} color={color}/>
        </div>
        <div className="stat-title font-bold">{title}</div>
        <div className="stat-value">{value}</div>
        <div className="stat-desc text-wrap w-60">{message}</div>
      </div>
    </div>
  );
}
