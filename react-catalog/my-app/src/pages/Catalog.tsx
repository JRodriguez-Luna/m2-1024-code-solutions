export function Catalog() {
  return (
    <div className="mx-10">
      <div className="text-[60px] border-b">
        <h1>Catalog</h1>
      </div>
      <div className="my-5 w-100 h-100">
        <ul className="flex flex-wrap gap-5 justify-start">
          <li className="w-64 py-2 h-100 border-solid border-2 cursor-pointer">
            <div className="w-full h-40 flex items-center justify-center">
              <img
                src="./images/shake-weight.jpg"
                alt="shake-weight.jpg"
                className="max-h-full max-w-full"
              />
            </div>
            <div className="px-2 py-2 h-40 flex flex-col justify-between">
              <h2 className="text-base font-semibold">test</h2>
              <p className="text-base text-gray-400">$99.99</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
