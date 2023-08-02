// Stopwatch.js
import React, { useState, useEffect, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return { hours, minutes, seconds };
  };

  return (
    <div className="stopwatch-container">
      <div className="watch">
        <div className="time-display">
          <div>{formatTime(time).hours.toString().padStart(2, '0')}</div>
          <span className="time-separator">:</span>
          <div>{formatTime(time).minutes.toString().padStart(2, '0')}</div>
          <span className="time-separator">:</span>
          <div>{formatTime(time).seconds.toString().padStart(2, '0')}</div>
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={handleStartPause} className={`start-pause-button ${isRunning ? 'pause' : 'start'}`}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
