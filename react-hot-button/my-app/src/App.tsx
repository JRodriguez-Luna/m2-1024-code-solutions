import { useState } from 'react';
import { HotButton } from './HotButton';
import './HotButton.css';
import './App.css';

const colors = ['three', 'six', 'nine', 'twelve', 'fifteen', 'eighteen'];

function App() {
  const [numClicks, setNumClicks] = useState(0);

  function handleClick() {
    setNumClicks(numClicks + 1);
  }

  const colorIndex = Math.min(Math.floor(numClicks / 3), colors.length - 1);
  const color = colors[colorIndex];

  return (
    <HotButton
      color={color}
      onClick={handleClick}
      label="Button"
      msg={`Clicks: ${numClicks}`}
    />
  );
}

export default App;
