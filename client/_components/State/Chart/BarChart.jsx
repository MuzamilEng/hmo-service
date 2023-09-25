import React from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart(props) {
    const options = {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
          },
        },
        datasets: {
          bar: {
            barPercentage: .5, // Adjust this value to change the width of the bars
            categoryPercentage: 0.7, // Adjust this value to control the spacing between bars
          },
        },
      };      

  return <div style={{ width: "70rem", height: "30rem" }}>
  <Bar options={options} data={props.data} />
</div>
}
export default BarChart;
