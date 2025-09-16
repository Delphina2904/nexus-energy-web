import React from "react";
import "./Timer.css";

const Timer: React.FC = () => {
  return (
    <div className="timer-container">
      <p className="timer-text">0 to 100 in 15 minutes</p>
    </div>
  );
};

export default Timer;
