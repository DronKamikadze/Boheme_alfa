// CartContext.tsx
import React, { createContext, useState } from 'react';

interface CartItem {
  article: string;
  name: string;
  price: number | undefined;
  quantity: number;
  image: string | undefined;
}

interface CartContextProps {
  cartItems: CartItem[];
  handleAddToCart: (item: CartItem) => void;
  handleRemoveFromCart: (article: string) => void;
  handleQuantityChange: (article: string, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: CartItem) => {
    const existingItem = cartItems.find(i => i.article === item.article);
    if (existingItem) {
      setCartItems(cartItems.map(i => i.article === item.article ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (article: string) => {
    setCartItems(cartItems.filter(item => item.article !== article));
  };

  const handleQuantityChange = (article: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(article);
    } else {
      setCartItems(cartItems.map(item => item.article === article ? { ...item, quantity } : item));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, handleRemoveFromCart, handleQuantityChange }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
