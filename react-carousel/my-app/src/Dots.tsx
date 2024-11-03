import { GoDot, GoDotFill } from 'react-icons/go';

type Props = {
  count: number;
  selected: number;
};

export function Dots({ count, selected }: Props) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(i === selected ? <GoDotFill key={i} /> : <GoDot key={i} />);
  }

  return <div className="dots">{dots}</div>;
}
