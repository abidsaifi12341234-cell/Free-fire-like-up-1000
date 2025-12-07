import React from 'react';
import { TextInputProps } from '../types';

/**
 * A reusable TextInput component with Tailwind CSS for consistent styling, labels, and error display.
 */
const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  className = '',
  label,
  error,
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-gray-300 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          shadow appearance-none border
          rounded w-full py-3 px-4 text-gray-100 leading-tight
          focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
          bg-gray-800 border-gray-700
          ${error ? 'border-red-500' : ''}
        `}
      />
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
    </div>
  );
};

export default TextInput;
