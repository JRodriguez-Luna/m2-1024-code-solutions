import { useState } from 'react';

type Props = {
  captions: string[];
};

export function ImageCaption({ captions }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImgCapClick = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex < captions.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <h3 onClick={handleImgCapClick}> {captions[currentIndex]} </h3>
    </div>
  );
}
