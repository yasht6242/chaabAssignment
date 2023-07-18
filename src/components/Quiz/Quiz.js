import React from "react";
import "./Quiz.css";
import { Doughnut } from "react-chartjs-2";
import Small from "../../assets/Small.jsx";

const Quiz = () => {
  const data = {
    labels: ["passed", "failed"],
    datasets: [
      {
        data: [423, 722],
        backgroundColor: ["rgba(1, 142, 66, 1)", "rgba(237, 28, 36, 1)"],
        // hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="quiz_container">
      <h1 className="quiz_passing_heading">Quiz Passing %</h1>
      <div className="quiz_pie_chart_information_box">
        <div style={{ width: "150px", height: "150px", marginTop: "34px" }}>
          <Doughnut data={data} options={options} />
        </div>
        <div className="quiz_status_container">
          <div className="quiz_status_sub_container">
            <Small color="#018E42" />
            <div className="quiz_status_text_containers">
              <h1 className="quiz_status_text_heading">passed</h1>
              <p className="quiz_status_text_description">423 Workers</p>
            </div>
          </div>
          <div className="quiz_status_sub_container">
            <Small color="#ED1C24" />
            <div className="quiz_status_text_containers" style={{marginTop:"10px"}}>
              <h1 className="quiz_status_text_heading">failed</h1>
              <p className="quiz_status_text_description">722 workers</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
