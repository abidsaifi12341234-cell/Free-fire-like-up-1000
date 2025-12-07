import React from 'react';

/**
 * The header component for the Elite Battleground Like Boost application.
 * Features a stylized title inspired by game UIs.
 */
const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-4 text-center shadow-md border-b-2 border-red-700">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 tracking-wide drop-shadow-lg animate-pulse-slight">
        Elite Battleground <span className="text-gray-100">Like Boost</span>
      </h1>
      <p className="text-sm sm:text-md text-gray-400 mt-2">
        Boost your in-game popularity for free!
      </p>
    </header>
  );
};

export default Header;