// Components/Navbar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md py-3 px-7 rounded-full max-w-7xl mx-auto mt-5 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/Image/Logo.png" alt="Bitworks Logo" className="h-8" />
        <span className="font-bold font-Logo text-xl bg-gradient-to-r from-Primary to-SecondPrimary bg-clip-text text-transparent">Bitworks</span>
      </Link>

      <ul className="flex space-x-8 font-semibold text-sm text-black">
        <li>
          <Link to="/" className="hover:text-Primary">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-Primary">About Us</Link>
        </li>
        <li className="relative">
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="flex items-center gap-1 hover:text-Primary"
          >
            Pages <ChevronDown className="w-4 h-4" />
          </button>
          {openDropdown && (
            <ul className="absolute top-10 left-0 bg-white shadow-md rounded-md p-2 w-40 z-10">
              <li>
                <Link to="/team" className="block px-4 py-2 hover:bg-Primary hover:text-white rounded">Team</Link>
              </li>
              <li>
                <Link to="/services" className="block px-4 py-2 hover:bg-Primary hover:text-white rounded">Services</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/blog" className="hover:text-Primary">Blog</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-Primary">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
