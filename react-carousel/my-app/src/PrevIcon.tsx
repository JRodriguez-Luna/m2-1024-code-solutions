import { GrPrevious } from 'react-icons/gr';

type Props = {
  onClick: () => void;
};

export function PrevIcon({ onClick }: Props) {
  return (
    <div className="icon" onClick={onClick}>
      <GrPrevious />
    </div>
  );
}
