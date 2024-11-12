import { Link, Outlet } from 'react-router-dom';

export function Header() {
  const navItem = ['About', 'Catalog'];
  const listItem = [];

  for (let i = 0; i < navItem.length; i++) {
    listItem.push(
      <li className="pt-2 cursor-pointer" key={i}>
        <Link
          to={`./${
            navItem[i].toLowerCase() !== 'catalog'
              ? navItem[i].toLowerCase()
              : ''
          }`}>
          {navItem[i]}
        </Link>
      </li>
    );
  }

  return (
    <div className="w-full h-10 bg-neutral-900">
      <nav className="w-full text-white">
        <ul className="flex space-x-3 px-3 ">{listItem}</ul>
      </nav>
      <Outlet />
    </div>
  );
}
