import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const image = '/starry-sky.jpeg';
const imgCap = 'A beautiful Image of Space';
const imgDes = `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        incidunt sit dolorum accusantium sapiente reiciendis maxime dolores
        ullam delectus, commodi placeat eveniet, quam voluptates facere et
        magnam architecto quaerat velit voluptas rerum quos asperiores quis in!
        Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero.
        Modi nisi eos autem? Iusto hic impedit aspernatur labore quos nesciunt?
        Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi
        ipsum, dicta sunt laborum similique repellat?
`;
const btnCont = 'Click For Next Image';

export default function App() {
  return (
    <>
      <Header text={headerText} />
      <ImageContainer src={image} />
      <ImageCaption text={imgCap} />
      <ImageDescription text={imgDes} />
      <ButtonContainer text={btnCont} />
    </>
  );
}
