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
    setIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  }

  function handlePrev() {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  }

  return (
    <>
      <Banner item={items[index]} />
      <PrevButton onClick={handlePrev} />
      <Indicators size={count} currIndex={index} />
      <NextButton onClick={handleNext} />
    </>
  );
}
