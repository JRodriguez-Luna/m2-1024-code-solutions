type Props = {
  size: number;
  currIndex: number;
  onIndicatorClick: (index: number) => void;
};

export function Indicators({ size, currIndex, onIndicatorClick }: Props) {
  const buttons = [];
  for (let i = 0; i < size; i++) {
    const selected = i === currIndex;
    buttons.push(
      <button
        style={{
          backgroundColor: selected ? 'white' : '',
          color: selected ? 'black' : 'white',
        }}
        onClick={() => onIndicatorClick(i)}>
        {i}
      </button>
    );
  }

  return <div>{buttons}</div>;
}
