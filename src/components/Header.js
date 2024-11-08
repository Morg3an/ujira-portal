import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ujira Portal</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
            <li><Link to="/profile" className="hover:underline">Profile</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;