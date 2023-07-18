import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./LineChartDiagram.css";
import ChartImage from '../../assets/ChartImage.jsx'

const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "UV",
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
      borderColor: "rgba(0,0,0,0)", // Line color
      borderWidth: 2,
      fill: " rgba(249, 249, 249, 1)", // Fill the area under the line
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false, // Hide vertical grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hide horizontal grid lines
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    tooltip: {
      enabled: false, // Hide the tooltips
    },
  },
};

const LineChartDiagram = ({color, index}) => {
  return (
    <div className="chart-container">
      {/* <Line data={data} options={options} /> */}

      <ChartImage color={color} index={index} />
    </div>
  );
};

export default LineChartDiagram;
