import { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch.tsx';
import './App.css';

export function App() {
  const [trigger, setTrigger] = useState(false);
  const text = trigger ? 'ON' : 'OFF';

  function handleClick() {
    setTrigger((prevTrigger) => !prevTrigger);
  }

  return (
    <>
      <ToggleSwitch trigger={trigger} label={text} onClick={handleClick} />
    </>
  );
}

export default App;
