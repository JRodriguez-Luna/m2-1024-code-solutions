import { createPortal } from 'react-dom';
import './Popup.css';
import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  positionTo: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
  opacity?: number;
};

export function Popup({
  isOpen,
  positionTo,
  onClose,
  children,
  opacity = 0.5,
}: Props) {
  if (!isOpen) return null;

  const r = positionTo?.getBoundingClientRect();
  const top = r ? r?.top + r?.height : '50%';
  const left = r ? r?.left + r?.width / 2 : '50%';

  return createPortal(
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
          pointerEvents: 'auto',
        }}></div>
      <div
        style={{
          position: 'absolute',
          left: `${left}px`,
          top: `${top}px`,
        }}>
        {children}
      </div>
    </>,
    document.body
  );
}
