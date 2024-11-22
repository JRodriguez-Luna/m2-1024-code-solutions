import { GrFormNext } from 'react-icons/gr';

type Props = {
  onClick: () => void;
};

export function NextButton({ onClick }: Props) {
  return (
    <div>
      <button onClick={onClick}>
        <GrFormNext />
      </button>
    </div>
  );
}
