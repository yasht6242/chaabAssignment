import React from "react";
import "./MonthlyTraining.css";
import arrowUp from "../../assets/Arrow - Up.svg";
import ellipse from "../../assets/Ellipse 138.svg";

const monthlydata = [
  {
    ellipse: ellipse,
    course: "Course A",
    courseDescription: "23 Workers took this course this week",
  },
  {
    ellipse: ellipse,
    course: "Course B",
    courseDescription: "253 Workers took this course this week",
  },
  {
    ellipse: ellipse,
    course: "Course C",
    courseDescription: "33 Workers took this course this week",
  },
  {
    ellipse: ellipse,
    course: "Course D",
    courseDescription: "103 Workers took this course this week",
  },
];
const MonthyTraining = () => {
  return (
    <div className="monthly_training_container">
      <div className="monthly_trainig_header">
        <h1 className="monthly_training_heading">Monthy Training Activity</h1>
        <p className="monthly_training_description">
          <span>
            <img src={arrowUp} alt="" />
          </span>
          16% more enrollees this month
        </p>
      </div>
      <div className="monthly_training_information_container">
        {monthlydata.map((data) => {
          return (
            <div className="monthly_data_information_box">
              <img src={data.ellipse} alt="" />
              <div className="monthly_data_information_box_course_box">
                <div className="monthly_data_information_box_course_heading">{data.course}</div>
                <div className="monthly_data_information_box_course_description">{data.courseDescription}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthyTraining;
