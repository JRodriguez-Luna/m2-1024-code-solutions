import { NextIcon } from "./NextIcon";
import { PrevIcon } from "./PrevIcon";
import { ImageDisplay } from "./ImageDisplay";
import { Dots } from "./Dots";
import './Carousel.css';

type Props = {
  images: {
    src: string;
    alt: string;
  }[],
}

export function Carousel({ images }: Props) {
  return (
    <div className="wrapper">
      <PrevIcon />
      <div className="center-column">
        <ImageDisplay />
        <Dots />
      </div>
      <NextIcon />
    </div>
  );
}
