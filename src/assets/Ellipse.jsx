import React from "react";

const Ellipse = ({ color }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5.28766" cy="5.15753" r="4.32877" fill={color} />
    </svg>
  );
};

export default Ellipse;
