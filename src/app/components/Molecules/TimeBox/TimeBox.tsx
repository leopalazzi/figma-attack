import { useState, useEffect } from 'react';

const TimeBox = () => {
  const [time, setTime] = useState(600); // 10 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <span>{formatTime(time)}</span>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
};

export default TimeBox;