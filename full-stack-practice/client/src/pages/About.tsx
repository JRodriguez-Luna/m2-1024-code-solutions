import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="mx-5 my-2 pt-5 text-3xl">
      <div className="text-base pb-4">
        <Link to="/" className="">
          &lt; Back to Catalog
        </Link>
      </div>
      <div className="w-100 flex justify-center items-center">
        <p>About</p>
      </div>
    </div>
  );
}
