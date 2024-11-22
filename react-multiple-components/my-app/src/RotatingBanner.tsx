import { useState } from 'react';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Props = {
  items: string[];
  count: number;
};

export function RotatingBanner({ items, count }: Props) {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function handlePrev() {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }

  function handleIndicatorClick(newIndex: number) {
    setIndex(newIndex);
  }

  return (
    <>
      <Banner item={items[index]} />
      <PrevButton onClick={handlePrev} />
      <Indicators
        size={count}
        currIndex={index}
        onIndicatorClick={handleIndicatorClick}
      />
      <NextButton onClick={handleNext} />
    </>
  );
}
