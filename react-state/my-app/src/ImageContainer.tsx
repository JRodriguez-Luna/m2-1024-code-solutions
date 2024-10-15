import { useState } from 'react';
import './ImageContainer.css';

type Props = {
  srcs: string[];
};

export function ImageContainer({ srcs }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleImgClick() {
    setCurrentIndex((prevIndex: number) =>
      prevIndex < srcs.length - 1 ? prevIndex + 1 : 0
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={srcs[currentIndex]}
          alt="space-image"
          onClick={handleImgClick}
        />
      </div>
    </div>
  );
}
