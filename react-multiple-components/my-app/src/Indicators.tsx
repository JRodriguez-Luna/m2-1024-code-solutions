type Props = {
  size: number;
  currIndex: number;
};

export function Indicators({ size, currIndex }: Props) {
  const buttons = [];
  for (let i = 0; i < size; i++) {
    buttons.push(
      <button className={currIndex === i ? 'selected-item' : ''}>{i}</button>
    );
  }

  return <div>{buttons}</div>;
}
