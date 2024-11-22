import { Link, useParams } from 'react-router-dom';
import { readProduct } from '../../../lib/read';
import { useEffect, useState } from 'react';
import { Product } from '../../../lib/data';
import { toDollars } from '../../../lib/to-dollars';

export function Details() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (err) {
        console.error('Error Loading:', err);
      }
    }

    if (productId) loadProduct(+productId);
  }, [productId]);

  return (
    <div className="mx-5 my-2">
      <div className="p-4 border w-auto h-auto">
        <div className="pb-4">
          <Link to="/" className="">
            &lt; Back to Catalog
          </Link>
        </div>
        <div>
          <div className="flex flex-wrap justify-start h-auto ">
            <img src={product?.imageUrl} alt={product?.name} className="w-96" />
            <div className="flex w-50 pl-5 flex-col">
              <div className="text-lg">
                <h2 className="text-3xl font-semibold pb-1">{product?.name}</h2>
                <p className="text-gray-400 pb-1">
                  {product?.price ? toDollars(product?.price) : '0.00'}
                </p>
                <p>{product?.shortDescription}</p>
              </div>
            </div>
          </div>
          <div className="text-base pt-5">
            <p>{product?.longDescription}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="w-auto bg-gray-200	 p-2 rounded"
          onClick={() => alert(`Added ${product?.name} to Cart `)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
