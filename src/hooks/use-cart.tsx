import { createContext, useContext, useState, type ReactNode } from 'react';

import type { Product } from '../../data';

type CartItems = Record<string, number>;

type CartContextValue = {
  items: CartItems;
  addItem: (product: Product) => void;
};

const defaultValue: CartContextValue = {
  items: {},
  addItem: () => {},
};

const CartContext = createContext<CartContextValue>(defaultValue);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItems>({});

  const addItem = (product: Product) => {
    setItems((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] ?? 0) + 1,
    }));
  };

  return <CartContext.Provider value={{ items, addItem }}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  return useContext(CartContext);
}
