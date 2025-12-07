import React from 'react';

/**
 * The footer component for the application.
 * Includes copyright information.
 */
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 bg-opacity-70 backdrop-blur-sm p-4 text-center text-gray-400 text-sm mt-auto border-t-2 border-red-700">
      <p>&copy; {new Date().getFullYear()} Elite Battleground. All rights reserved.</p>
    </footer>
  );
};

export default Footer;