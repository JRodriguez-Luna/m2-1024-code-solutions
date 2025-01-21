import { Link } from 'react-router-dom';
import { Product } from '../../lib/data';
import { useEffect, useState } from 'react';
import { toDollars } from '../../lib/to-dollars';

export function Catalog() {
  const [list, setList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error(`Response Status: ${res.status}`);
        }

        const json = await res.json();
        setList(json);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (error) {
    console.error('fetch error', error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error.'}
      </div>
    );
  }

  return (
    <div className="mx-10 w-100 pb-5">
      <div className="text-[60px] border-b">
        <h1>Catalog</h1>
      </div>
      <div className="my-5 w-full h-auto">
        <ul className="grid grid-cols-3 gap-5">
          {list.map((item) => (
            <li
              className="py-2 h-100 border-solid border-2 cursor-pointer"
              key={item.productId}>
              <ProductCard product={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  type ProductProps = {
    product: Product;
  };

  function ProductCard({ product }: ProductProps) {
    return (
      <Link to={`/details/${product.productId}`}>
        <div className="w-full h-72 flex items-center justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-h-full max-w-full"
          />
        </div>
        <div className="px-2 py-2 h-40 flex flex-col justify-between">
          <h2 className="text-base font-semibold">{product.name}</h2>
          <p className="text-base text-gray-400">{toDollars(product.price)}</p>
          <p className="text-base">{product.shortDescription}</p>
        </div>
      </Link>
    );
  }
}
