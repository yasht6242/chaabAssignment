import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Completions.css";

const ActiveTraining = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ["S", "M", "T", "W", "T", "F", "S", "M", "T", "W"],
      datasets: [
        {
          label: "Weekly Sales",
          data: [150, 150, 230, 259, 300, 350, 100,120,280,200],
          backgroundColor: ["rgba(13, 98, 255, 1), rgba(27, 89, 248, 0)"],
          borderColor: ["rgba(13, 98, 255, 1), rgba(27, 89, 248, 0)"],
          borderWidth: 1,
          barThickness: 17,
          barPercentage: 1, // Set the width of the bars
          borderRadius: 10, // Set border radius for each bar
        },
        {
          label: "Weekly Sales",
          data: [400, 400, 400, 400, 400, 400, 400,400,400,400],
          backgroundColor: ["rgba(231, 239, 255, 1)"],
          borderColor: ["rgba(231, 239, 255, 1)"],
          borderWidth: 1,
          barThickness: 17,
          barPercentage: 1, // Set the width of the bars
          borderRadius: 10, // Set border radius for each bar
        },
      ],
    };

    const config = {
      type: "bar",
      data,
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            beginAtZero: true,
            stacked: true,
            min: 0, // Set the minimum value of the y-axis
            max: 400, // Set the maximum value of the y-axis
            stepSize: 100, // Set the interval between ticks on the y-axis
            grid: {
              display: false,
              drawBorder: false, // Remove y-axis line
            },
            ticks: {
              display: true,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
            bar: {
              borderRadius: 10, // Set border radius for each bar
            },
        },
      },
    };

    const myChart = new Chart(chartRef.current, config);

    // Cleanup
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="completion_container">
      <div className="completion_status_heading_container">
        <div className="completion_status_heading">
          {" "}
          Daily Completions Training{" "}
        </div>
        <div className="completion_status_heading_second_text">
          Last 7 days
        </div>
      </div>

      <div className="chartMenu">
        {/* <p>
          Last 14 Days Active Workers at Training 
          <span id="chartVersion"></span>
        </p> */}
      </div>
      <div className="chartCard">
        <div className="chartBox_completion">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default ActiveTraining;
