import { useState } from 'react';

type Props = {
  descs: string[];
};

export function ImageDescription({ descs }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImgDescrip = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex < descs.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <p onClick={handleImgDescrip}>{descs[currentIndex]}</p>
    </div>
  );
}
