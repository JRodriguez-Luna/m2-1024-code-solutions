import { products, Product } from '../../../lib/data';
import { ReactNode } from 'react';

export function Catalog() {
  const list: ReactNode[] = [];

  products.map((item: Product) => {
    list.push(
      <li className="w-64 py-2 h-100 border-solid border-2 cursor-pointer" key={item.productId}>
        <div className="w-full h-40 flex items-center justify-center">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="max-h-full max-w-full"
          />
        </div>
        <div className="px-2 py-2 h-40 flex flex-col justify-between">
          <h2 className="text-base font-semibold">{item.name}</h2>
          <p className="text-base text-gray-400">&#36;{(item.price / 100).toFixed(2)}</p>
          <p className="text-base">{item.shortDescription}</p>
        </div>
      </li>
    );
  });

  return (
    <div className="mx-10">
      <div className="text-[60px] border-b">
        <h1>Catalog</h1>
      </div>
      <div className="my-5 w-100 h-100">
        <ul className="flex flex-wrap gap-5 justify-start">{list}</ul>
      </div>
    </div>
  );
}
