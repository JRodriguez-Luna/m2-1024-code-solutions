import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export function AppDrawer({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <div className={`w-56 text-2xl  border`}>
        <button className="mx-2 my-5" onClick={toggleDrawer}>
          <FaBars />
        </button>
        <div className="ml-5">
          <h2 className="mb-3">Hylian Shopping</h2>
          <ul className="text-base space-y-5">
            <Link to={menuItems.path}>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>About</Link>
                </li>
              ))}
            </Link>
            <li>Catalog</li>
          </ul>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
