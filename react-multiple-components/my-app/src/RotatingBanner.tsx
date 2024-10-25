import { Banner } from "./Banner";
import { Indicators } from "./Indicators";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

type Props ={
  items: string[],
  count: number,
}

export function RotatingBanner({ items, count }: Props) {

  return (
    <>
      <Banner item={items[0]} />
      <PrevButton />
      <Indicators size={count} />
      <NextButton />
    </>
  )
}
