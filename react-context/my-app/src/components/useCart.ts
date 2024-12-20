import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  if (!useContext(CartContext)) {
    throw new Error('useCart can only be used inside the "CartProvider" tree.');
  }

  return useContext(CartContext);
}
