import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';

export function AppDrawer({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <div className={`text-2xl  border ${isOpen ? 'open' : 'close'}`}>
        <button className="mx-2 my-5" onClick={toggleDrawer}>
          <FaBars />
        </button>
        <div className="ml-5">
          <h2 className={`mb-3 ${isOpen ? '' : 'hidden'}`}>Hylian Shopping</h2>
          <ul className="text-base space-y-5">
            {menuItems.map((item) => (
              <li className="flex items-center w-24" key={item.name}>
                <img
                  className="w-12 h-auto"
                  src={item.iconUrl}
                  alt={item.name}
                />
                <Link className={`${isOpen ? '' : 'hidden'}`} to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
