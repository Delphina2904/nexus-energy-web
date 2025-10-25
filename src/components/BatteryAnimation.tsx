import React, { memo, useMemo, useRef, useEffect } from 'react';
import './BatteryAnimation.css';

interface BatteryAnimationProps {
  percentage?: number;
  playbackSpeed?: number; // Add playback speed prop
}

const BatteryAnimation = memo(({ percentage = 0, playbackSpeed = 0.25 }: BatteryAnimationProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Memoize the bar states to prevent unnecessary re-renders
  const barStates = useMemo(() => ({
    bar1: percentage > 0,
    bar2: percentage >= 25,
    bar3: percentage >= 50,
    bar4: percentage >= 75
  }), [percentage]);

  // Effect to control video playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return (
    <div className="battery-container">
      <div className="battery-percentage-label">0-100 %</div>
      <div className="battery-main-content">
        <video
          ref={videoRef}
          src="/images/15-clock.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[100px] h-[100px] object-cover rounded-full transition-all duration-700 hover:scale-110"
       
        />
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
