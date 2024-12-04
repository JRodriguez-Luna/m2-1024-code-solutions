import { useState } from 'react';
import { Modal } from './Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Delete Me</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <p>Do you really want to delete?</p>
        <button onClick={closeModal}>Cancel</button>
        <button
          onClick={() => {
            alert('Something was deleted!');
            closeModal();
          }}>
          Delete
        </button>
      </Modal>
    </>
  );
}

export default App;
