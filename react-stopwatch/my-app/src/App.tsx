import { useState } from 'react';
import { StopWatch } from './StopWatch';
import './App.css';

export function App() {
  const [timer, setTimer] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | number>();

  function handleClick() {
    if (!toggle) {
      const id = window.setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    // Play or Pause function
    setToggle((prevToggle) => !prevToggle);
  }

  function handleReset() {
    if (intervalId) setTimer(0);
  }

  return (
    <StopWatch
      timer={timer}
      toggle={toggle}
      onClick={handleClick}
      onReset={handleReset}
    />
  );
}

export default App;
