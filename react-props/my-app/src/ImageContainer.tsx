import './ImageContainer.css';

export function ImageContainer() {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src="/starry-sky.jpeg" alt="space-image" />
      </div>
    </div>
  );
}
