type Props = {
  image: {
    src: string;
    alt: string;
  };
};

export function ImageDisplay({ image }: Props) {
  const src = image.src;
  const alt = image.alt;
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
}
