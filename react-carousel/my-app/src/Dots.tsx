import { GoDot, GoDotFill } from 'react-icons/go';

type Props = {
  count: number;
  selected: number;
  onImageClick: (index: number) => void;
};

export function Dots({ count, selected, onImageClick }: Props) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(
      i === selected ? (
        <GoDotFill key={i} onClick={() => onImageClick(i)} />
      ) : (
        <GoDot key={i} onClick={() => onImageClick(i)} />
      )
    );
  }

  return <div className="dots">{dots}</div>;
}
