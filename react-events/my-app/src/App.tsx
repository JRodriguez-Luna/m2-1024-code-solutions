import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
import { useState } from 'react';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCap = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescrip = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonLabel = 'Click for Next Image';

export function App() {
  const [currIndex, setImageIndex] = useState(0);

  function handleButtonClick() {
    setImageIndex((prevIndex) =>
      prevIndex < imageSrc.length - 1 ? prevIndex + 1 : 0
    );
  }

  return (
    <>
      <Header text={headerText} />
      <ImageContainer src={imageSrc[currIndex]} />
      <ImageCaption caption={imageCap[currIndex]} />
      <ImageDescription desc={imageDescrip[currIndex]} />
      <ButtonContainer label={buttonLabel} onClick={handleButtonClick} />
    </>
  );
}
