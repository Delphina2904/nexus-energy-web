import React from 'react';

const Timer: React.FC = () => {
  const hourMarkers = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className="absolute w-0.5 h-1 bg-gray-600 left-1/2 top-0.5 -ml-0.5"
      style={{
        transformOrigin: '50% 36px',
        transform: `rotate(${i * 30}deg) translateX(-50%)`
      }}
    />
  ));

  const minuteMarkers = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className="absolute w-px h-0.5 bg-gray-400 left-1/2 top-1 -ml-px"
      style={{
        transformOrigin: '50% 35px',
        transform: `rotate(${(i + 1) * 6}deg) translateX(-50%)`
      }}
    />
  ));

  return (
    <div className="timer-gauge">
      <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
        <div className="relative rounded-full"
             style={{
               width: '72px',
               height: '72px',
               background: 'transparent'
             }}>
          
          {/* Highlighted arc from 12 to 3 */}
          <div 
            className="absolute w-full h-full rounded-full"
            style={{
              background: `conic-gradient(
                from 0deg,
                rgba(34, 197, 94, 0.3) 0deg,
                rgba(34, 197, 94, 0.3) 90deg,
                transparent 90deg,
                transparent 360deg
              )`,
              zIndex: 1
            }}
          />

          {/* Hour markers */}
          <div className="absolute w-full h-full">
            {hourMarkers}
          </div>

          {/* Minute markers */}
          <div className="absolute w-full h-full">
            {minuteMarkers}
          </div>


          {/* Clock hands */}
          <div className="absolute w-full h-full top-0 left-0">
            {/* Hour hand pointing straight to 12 */}
            <div
              className="absolute left-1/2 bottom-1/2 bg-green-500 rounded-sm -ml-0.5"
              style={{
                width: '2px',
                height: '20px',
                transformOrigin: 'bottom center',
                transform: 'rotate(0deg)',
                zIndex: 3,
                boxShadow: '0 2px 4px rgba(34, 197, 94, 0.3)'
              }}
            />
            {/* Minute hand pointing to 3 */}
            <div
              className="absolute left-1/2 bottom-1/2 bg-green-500 rounded-sm -ml-0.5"
              style={{
                width: '1px',
                height: '30px',
                transformOrigin: 'bottom center',
                transform: 'rotate(90deg)',
                zIndex: 2,
                boxShadow: '0 2px 4px rgba(34, 197, 94, 0.3)'
              }}
            />
          </div>

          {/* Center dot */}
          <div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{
              zIndex: 4,
              boxShadow: '0 2px 4px rgba(34, 197, 94, 0.3)'
            }}
          />

          {/* 15 MIN text */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            style={{
              zIndex: 5,
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 'bold',
              textShadow: '0 0 4px rgba(0, 255, 136, 0.8)',
              lineHeight: '1'
            }}
          >
            <div>15</div>
            <div>MIN</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timer;