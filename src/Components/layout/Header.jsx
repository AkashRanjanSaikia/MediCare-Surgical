import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navigation } from '../../Constants/index.js'
import { Stethoscope } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full p-3 sm:p-3 sm:px-10 text-black bg-white fixed top-0 z-50 ">

      <nav className="flex w-full max-w-7xl mx-auto items-center justify-between">

        {/* Logo */}

        <Link to='/'>
          <div className="flex items-center space-x-2 " >

            <div className="bg-blue-400 p-2 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl sm:text-3xl font-semibold text-gray-900">MediCare Surgical</span>
          </div>
        </Link>



        {/* Desktop Nav */}

        <div className="hidden sm:flex gap-10">
          {navigation.map((item, index) => (
            <NavLink
              to={item.href}
              key={index}
              className={({ isActive }) =>
                `text-xl font-medium transition-all duration-200 ease-in-out transform 
                  ${isActive ? 'text-primary' : 'text-gray-700'} hover:scale-110`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}

        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}

      {menuOpen && (
        <div className="sm:hidden mt-4 px-5 space-y-3">
          {navigation.map((item, index) => (
            <NavLink
              to={item.href}
              key={index}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg  pb-2 transition-colors ${isActive ? 'text-primary font-semibold' : 'text-gray-700'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
