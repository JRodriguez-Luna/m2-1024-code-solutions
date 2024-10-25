type Props = {
  size: number,
}

export function Indicators({ size }: Props) {
  const buttons = [];
  for(let i = 0; i < size; i++) {
    buttons.push( <button>{i}</button> );
  }

  return (
    <div>
      {buttons}
    </div>
  )
}
