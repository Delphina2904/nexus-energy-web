import React from 'react';
import './BatteryAnimation.css';

const BatteryAnimation = ({ percentage = 0 }) => {
  return (
    <div className="battery-container">
      <div className="battery-shell">
        <div className="battery-cap" />
        <div className="battery-bars-container">
          <div className={`charging-bar ${percentage > 0 ? 'filled' : ''}`} />
          <div className={`charging-bar ${percentage >= 25 ? 'filled' : ''}`} />
          <div className={`charging-bar ${percentage >= 50 ? 'filled' : ''}`} />
          <div className={`charging-bar ${percentage >= 75 ? 'filled' : ''}`} />
        </div>
      </div>
    </div>
  );
};

export default BatteryAnimation;
