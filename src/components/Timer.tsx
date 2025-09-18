import React, { useEffect, useRef } from "react";
import "./Timer.css";

const Timer: React.FC = () => {
  const arcRef = useRef<SVGPathElement | null>(null);
  // 15 second cycle visual to represent 15 MIN
  useEffect(() => {
    let start = performance.now();
    let raf: number | null = null;
    const radius = 24;
    const circumference = 2 * Math.PI * radius;

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000; // seconds
      const progress = (elapsed % 15) / 15; // 0..1 over 15s
      const dash = circumference * progress;
      if (arcRef.current) {
        arcRef.current.setAttribute("strokeDasharray", `${dash} ${circumference}`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="timer-gauge">
      <svg width="72" height="72" viewBox="0 0 72 72" className="timer-svg">
        <circle cx="36" cy="36" r="24" className="timer-track" />
        <path
          ref={arcRef}
          className="timer-arc"
          d="M36 12 a 24 24 0 1 1 0 48 a 24 24 0 1 1 0 -48"
          strokeLinecap="round"
        />
      </svg>
      <div className="timer-label">
        <span className="timer-minutes">15</span>
        <span className="timer-unit">MIN</span>
      </div>
    </div>
  );
};

export default Timer;
