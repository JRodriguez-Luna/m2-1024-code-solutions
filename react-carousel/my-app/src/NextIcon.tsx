import { GrNext } from 'react-icons/gr';

type Props = {
  onClick: () => void;
};

export function NextIcon({ onClick }: Props) {
  return (
    <div className="icon" onClick={onClick}>
      <GrNext />
    </div>
  );
}
