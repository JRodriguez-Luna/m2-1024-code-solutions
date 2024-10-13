import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = [
  '/starry-sky.jpeg',
  '/cool-wallpaper.jpg',
  'cool-car.jpg',
  'cool-future-city.jpg',
];
const imageCap = [
  'A Beautiful Image of Space',
  'A cool looking wallpaper',
  'A Cool Looking Car',
  'A Dope Future Looking City',
];
const imageDescrip = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat',
  'Just a cool wallpaper',
  'A cool Need for Speed Car... I think',
  'Reminds me of Bladerunner... or is it Blazerunner?',
];
const buttonLabel = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header text={headerText} />
      <ImageContainer srcs={imageSrc} />
      <ImageCaption captions={imageCap} />
      <ImageDescription descs={imageDescrip} />
      <ButtonContainer label={buttonLabel} />
    </>
  );
}
