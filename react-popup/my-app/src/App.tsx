import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const showMenuItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button ref={buttonRef} onClick={showMenuItem}>
        Pop up!
      </button>
      <p></p>
      <Popup
        onClose={() => setIsOpen(false)}
        positionTo={buttonRef.current}
        isOpen={isOpen}>
        <div className="menu-wrapper">
          <p>Menu Items</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </Popup>
      <p></p>
    </>
  );
}

export default App;
