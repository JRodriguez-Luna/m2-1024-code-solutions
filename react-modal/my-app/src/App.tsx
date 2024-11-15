import { useRef } from 'react';
import './App.css';

function App() {
  const modal = useRef<HTMLDialogElement>(null);
  const openModal = (): void => {
    modal.current?.showModal();
  };
  const closeModal = (): void => {
    modal.current?.close();
  };

  return (
    <>
      <button onClick={openModal}>Delete Me</button>
      <dialog ref={modal}>
        <p>Do you really want to delete?</p>
        <button onClick={closeModal}>Cancel</button>
        <button
          onClick={() => {
            alert('Something was deleted!');
            closeModal();
          }}>
          Delete
        </button>
      </dialog>
    </>
  );
}

export default App;
