type Props = {
  item: string,
}

export function Banner({ item }: Props) {
  return (
    <div>
      <p>{item}</p>
    </div>
  )
}
