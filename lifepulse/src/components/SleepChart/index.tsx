// src/components/SleepChart/index.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function SleepChart({ data }) {
  const labels = data.map((entry) => entry.day);
  const hours = data.map((entry) => entry.hours);

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: "Sleep Hours",
            data: hours,
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.2)",
            tension: 0.3,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { display: true, position: "top" },
        },
      }}
    />
  );
}
