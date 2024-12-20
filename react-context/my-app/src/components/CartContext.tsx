import { createContext } from 'react';
import { Product } from '../lib';

// Define the type for the context value
export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

// Provide a default value for the context
const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined, // Do-nothing function
};

// Create the context
export const CartContext = createContext<CartValue>(defaultCartValue);
