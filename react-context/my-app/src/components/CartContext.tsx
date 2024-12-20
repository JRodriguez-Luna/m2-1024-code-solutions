import { createContext, ReactNode } from 'react';
import { useState } from 'react';
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

// Define the provider props types
type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cartContent, setCartContent] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCartContent((prevCart) => [...prevCart, product]);
  }

  const cartContextValues = {
    cart: cartContent,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
}
