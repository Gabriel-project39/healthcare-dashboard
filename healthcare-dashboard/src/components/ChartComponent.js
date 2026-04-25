import React from "react";
import {
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function ChartComponent({ history }) {
  const data = {
    labels: history.map(item => item.month),
    datasets: [
      {
        label: "Systolic",
        data: history.map(item => item.systolic),
        borderWidth: 2
      },
      {
        label: "Diastolic",
        data: history.map(item => item.diastolic),
        borderWidth: 2
      }
    ]
  };

  return <Line data={data} />;
}

export default ChartComponent;