import { NextIcon } from "./NextIcon";
import { PrevIcon } from "./PrevIcon";
import { ImageDisplay } from "./ImageDisplay";

export function Carousel() {
  return (
    <div>
      <PrevIcon />
      <ImageDisplay />
      <NextIcon />
    </div>
  )
}
