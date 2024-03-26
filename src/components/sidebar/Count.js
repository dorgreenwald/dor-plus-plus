import React from "react";

const Count = ({ total = 0, day = 1 }) => {
  return (
    <div>
      <div>day {day}</div>
      <div>total {total}</div>
    </div>
  );
};

export default Count;
