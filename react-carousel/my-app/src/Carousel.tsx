import { NextIcon } from './NextIcon';
import { PrevIcon } from './PrevIcon';
import { ImageDisplay } from './ImageDisplay';
import { Dots } from './Dots';
import './Carousel.css';
import { useState } from 'react';

type Props = {
  images: {
    src: string;
    alt: string;
  }[];
  count: number;
};

export function Carousel({ images, count }: Props) {
  const [selected, setSelected] = useState(0);

  function handleNext() {
    setSelected((prevSelected) => (prevSelected + 1) % images.length);
  }

  function handlePrev() {
    setSelected(
      (prevSelected) => (prevSelected - 1 + images.length) % images.length
    );
  }

  function handleImageClick(newSelect: number) {
    setSelected(newSelect);
  }

  return (
    <div className="wrapper">
      <PrevIcon onClick={handlePrev} />
      <div className="center-column">
        <ImageDisplay image={images[selected]} />
        <Dots
          count={count}
          selected={selected}
          onImageClick={handleImageClick}
        />
      </div>
      <NextIcon onClick={handleNext} />
    </div>
  );
}
