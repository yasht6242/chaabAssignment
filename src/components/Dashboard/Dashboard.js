import React from 'react';
import './Dashboard.css';
import Status from '../Status/Status';
import ActiveTraining from '../ActiveTraining/ActiveTraining';
import LineChart from '../LineChart/LineChart';
import MonthlyTraining from '../MonthlyTraining/MonthyTraining';
import Quiz from '../Quiz/Quiz';
import Completions from '../Completions/Completions';

const lineChartData = [
  { heading: "In Training Workers", number: "3354", percentage: "20%", percentagenumber: "874" },
  { heading: "Video Watch Time(Hrs)", number: "2433", percentage: "15%", percentagenumber: "943" },
  { heading: "%Workers Passing Quiz", number: "95%", percentage: "30%", percentagenumber: "562" },
  { heading: "Average Days Taken", number: "6", percentage: "10%", percentagenumber: "731" },
];

const Dashboard = () => {
  return (
    <div className="dashboard_container ">
      <div className="dashboard_line_charts_boxes">
        {lineChartData.map((data, index) => (
          <LineChart
            key={index}
            heading={data.heading}
            number={data.number}
            percentage={data.percentage}
            percentagenumber={data.percentagenumber}
            color={index === 2 ? "#ED1C24" : "#018E42"}
            index={index}
          />
        ))}
      </div>
      <div className='dashboard_chapterwise_status_active_training_components'>
        <div className='dashboard_chapterwise_status_component'>
          <Status />
        </div>
        <div className='dashboard_chapterwise_active_training_component'>
          <ActiveTraining />
        </div>
      </div>
      <div className='dashboard_monthly_training_quiz_completions_componenents'>
        <div className='dashboard_monthly_training_componenent'>
          <MonthlyTraining />
        </div>
        <div className='dashboard_quiz_componenent'>
          <Quiz />
        </div>
        <div className='dashboard_completions_componenent'>
          <Completions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
