import { FaPlay, FaPause } from 'react-icons/fa';
import './StopWatch.css';

type Props = {
  timer: number;
  toggle: boolean;
  onClick: () => void;
  onReset: () => void;
};

export function StopWatch({ timer, toggle, onClick, onReset }: Props) {
  return (
    <div className="stopwatch">
      <div className="watch-face">
        <p className="timer" onClick={onReset}>
          {timer}
        </p>
      </div>
      <FaPlay className={`click ${toggle ? 'hidden' : ''}`} onClick={onClick} />
      <FaPause
        className={`click ${toggle ? '' : 'hidden'}`}
        onClick={onClick}
      />
    </div>
  );
}
