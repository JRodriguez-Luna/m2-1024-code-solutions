import { useState } from 'react';
import { ValidatedInput } from './ValidatedInput';
import './App.css';

function App() {
  const [passwordValid, setPasswordValid] = useState(false);
  const [validationMessage, setValidationMessage] = useState(
    'A password is required.'
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const userInput = e.target.value;

    if (userInput.length === 0) {
      setValidationMessage('A password is required.');
      setPasswordValid(false);
    } else if (userInput.length < 8) {
      setValidationMessage('Your password is too short.');
      setPasswordValid(false);
    } else {
      setValidationMessage('');
      setPasswordValid(true);
    }
  }

  return (
    <ValidatedInput
      active={passwordValid}
      label={validationMessage}
      onChange={handleChange}
    />
  );
}

export default App;
