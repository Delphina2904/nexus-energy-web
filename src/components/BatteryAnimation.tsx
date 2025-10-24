import React, { memo, useMemo } from 'react';
import './BatteryAnimation.css';

interface BatteryAnimationProps {
  percentage?: number;
}

const BatteryAnimation = memo(({ percentage = 0 }: BatteryAnimationProps) => {
  // Memoize the bar states to prevent unnecessary re-renders
  const barStates = useMemo(() => ({
    bar1: percentage > 0,
    bar2: percentage >= 25,
    bar3: percentage >= 50,
    bar4: percentage >= 75
  }), [percentage]);

  return (
    <div className="battery-container">
      <div className="battery-percentage-label">0-100 %</div>
      <div className="battery-main-content">
        <div className="charging-time-circle">
          <span className="time-number">15</span>
          <span className="time-unit">MIN</span>
        </div>
        <div className="battery-shell">
          <div className="battery-cap" />
          <div className="battery-bars-container">
            <div className={`charging-bar ${barStates.bar1 ? 'filled' : ''}`} />
            <div className={`charging-bar ${barStates.bar2 ? 'filled' : ''}`} />
            <div className={`charging-bar ${barStates.bar3 ? 'filled' : ''}`} />
            <div className={`charging-bar ${barStates.bar4 ? 'filled' : ''}`} />
          </div>
        </div>
      </div>
    </div>
  );
});

BatteryAnimation.displayName = 'BatteryAnimation';

export default BatteryAnimation;
