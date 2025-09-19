import React from "react";
import "./Timer.css";

const Timer: React.FC = () => {
  // Fixed time showing 15 minutes
  const time = { hours: 0, minutes: 15 };

  // Calculate hand angles for 15 minutes
  const hourAngle = (time.hours % 12) * 30 + (time.minutes / 60) * 30; // 30 degrees per hour
  const minuteAngle = time.minutes * 6; // 6 degrees per minute

  return (
    <div className="timer-gauge">
      <svg width="72" height="72" viewBox="0 0 72 72" className="timer-svg">
        {/* Clock face */}
        <circle cx="36" cy="36" r="24" className="timer-track" />
        
        {/* Green highlight for 0-15 minutes (top-right quarter) */}
        <path
          d="M 36 36 L 36 12 A 24 24 0 0 1 48 36 L 36 36 Z"
          className="timer-highlight"
        />
        
        {/* Hour marks */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30) - 90; // Start from top (12 o'clock)
          const x1 = 36 + 20 * Math.cos(angle * Math.PI / 180);
          const y1 = 36 + 20 * Math.sin(angle * Math.PI / 180);
          const x2 = 36 + 22 * Math.cos(angle * Math.PI / 180);
          const y2 = 36 + 22 * Math.sin(angle * Math.PI / 180);
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="hour-mark"
            />
          );
        })}
      </svg>
      <div className="timer-label">
        <span className="timer-minutes">{time.minutes}</span>
        <span className="timer-unit">MIN</span>
      </div>
    </div>
  );
};

export default Timer;
