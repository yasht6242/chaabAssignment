import React from "react";
import "./Status.css";
import { PieChart } from "react-minimal-pie-chart";

import Ellipse from "../../assets/Ellipse";

const Status = () => {
  const data = [
    { title: "Finished Training", value: 20, color: "rgba(13, 98, 255, 1)" },
    { title: "Chapter B", value: 15, color: "#8400D5" },
    { title: "Haven't Started Yet", value: 10, color: "rgba(237, 28, 36, 1)" },
    { title: "Chapter A", value: 30, color: "rgba(51, 51, 51, 1)" },
    { title: "Chapter C", value: 25, color: "rgba(66, 95, 87, 1)" },
  ];

  const needleData = [
    { value: 50, color: "#000000" }, // Needle color and value (should sum up to 100)
  ];
  return (
    <div className="status_container">
      <div className="status_container_heading">Chapter Wise Status</div>
      <div className="status_container_pie_chart">
        <PieChart
          data={data}
          lineWidth={60}
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
          labelStyle={{
            fontSize: "8px",
            fontFamily: "sans-serif",
            fill: "#fff",
          }}
          labelPosition={112}
          animate
        />
        <PieChart data={needleData} lineWidth={0} />
      </div>

      <div className="status_container_pie_chart_data">
        <div className="status_container_pie_chart_data_one">
          <div className="status_container_pie_chart_data_sub_containers">
            <Ellipse color="rgba(13, 98, 255, 1)" />
            <div className="status_container_pie_chart_data_text">
              Finished Training
            </div>
          </div>
          <div className="status_container_pie_chart_data_sub_containers">
            <Ellipse color="#8400D5" />
            <div className="status_container_pie_chart_data_text">
              Chapter B
            </div>
          </div>
          <div className="status_container_pie_chart_data_sub_containers">
            <Ellipse color="rgba(237, 28, 36, 1)" />
            <div className="status_container_pie_chart_data_text">
              Haven't Started Yet
            </div>
          </div>
        </div>
        <div className="status_container_pie_chart_data_two">
          <div className="status_container_pie_chart_data_sub_containers">
            <Ellipse color="rgba(51, 51, 51, 1)" />
            <div className="status_container_pie_chart_data_text">
              Chapter A
            </div>
          </div>
          <div className="status_container_pie_chart_data_sub_containers">
            <Ellipse color="rgba(66, 95, 87, 1)" />
            <div className="status_container_pie_chart_data_text">
              Chapter C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
