// Add React import for type definitions
import React from 'react';

/**
 * Interface for a generic error response, useful for displaying user-friendly messages.
 */
export interface ErrorResponse {
  message: string;
}

/**
 * Defines the props for a generic button component.
 */
export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * Defines the props for a generic text input component.
 */
export interface TextInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  label?: string;
  error?: string;
}