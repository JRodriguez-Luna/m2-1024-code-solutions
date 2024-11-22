import { GrFormPrevious } from 'react-icons/gr';

type Props = {
  onClick: () => void;
};

export function PrevButton({ onClick }: Props) {
  return (
    <div>
      <button onClick={onClick}>
        <GrFormPrevious />
      </button>
    </div>
  );
}
