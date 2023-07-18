import trend from "../../assets/trend-up.svg";
import React from "react";
import './LineChart.css';
import LineChartDiagram from "../LineChartDiagram/LineChartDiagram";
import ChartImage from '../../assets/ChartImage';

const LineChart = ({ heading, number, percentage, percentagenumber, color, index }) => {
  return (
    <div className="line_chart_container">
      <div className="line_chart_heading">{heading}</div>
      <div className="line_chart_content_box">
        <div className="line_chart_content_description">
          <div className="line_chart_content_description_numbers">{number}</div>
          <div className="line_chart_content_description_percentages_numbers_box">
            <div className="line_chart_content_description_percentages_box">
              <img
                className="line_chart_content_description_percentages_image"
                src={trend}
                alt=""
              />
              <div className="line_chart_content_description_percentages_text">
                {percentage}
              </div>
            </div>
            <div className="line_chart_content_description_percentages_number">
              {percentagenumber}
            </div>
          </div>
        </div>
        <div className="line_chart_diagram">
          {index === 1 ? (
            <ChartImage className="chart-image" color={color} />
          ) : (
            <LineChartDiagram className="line-chart-diagram" color={color} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
