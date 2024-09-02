import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* App Name on the Left */}
        <div className="text-lg font-bold">MyApp</div>
        
        {/* Centered Menu on Large Screens */}
        <nav className="hidden lg:flex lg:items-center lg:justify-center flex-grow">
          <ul className="lg:flex lg:space-x-4">
            <li><Link to="/" className="block p-2">Home</Link></li>
            <li><Link to="/about" className="block p-2">About</Link></li>
            <li><Link to="/services" className="block p-2">Services</Link></li>
            <li><Link to="/contact" className="block p-2">Contact</Link></li>
          </ul>
        </nav>
        
        {/* Hamburger Icon on the Right on Small Screens */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar on Small Screens */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full bg-blue-600 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '250px' }}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="space-y-2 p-4 mt-12">
          <li><Link to="/" className="block p-2">Home</Link></li>
          <li><Link to="/about" className="block p-2">About</Link></li>
          <li><Link to="/services" className="block p-2">Services</Link></li>
          <li><Link to="/contact" className="block p-2">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
