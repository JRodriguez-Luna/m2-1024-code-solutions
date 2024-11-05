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
    <div className="img-display">
      <img src={src} alt={alt} />
    </div>
  );
}
