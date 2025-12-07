import React from 'react';
import { ButtonProps } from '../types';

/**
 * A reusable Button component styled with Tailwind CSS, supporting loading states and disabled states.
 */
const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative flex items-center justify-center
        px-8 py-3 rounded-full text-lg font-bold
        bg-gradient-to-r from-red-600 to-red-800
        text-white uppercase tracking-wider
        shadow-lg hover:shadow-xl transition-all duration-300
        ${(disabled || loading) ? 'opacity-50 cursor-not-allowed' : 'hover:from-red-700 hover:to-red-900'}
        focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50
        ${className}
      `}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}
      <span className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        {children}
      </span>
    </button>
  );
};

export default Button;
