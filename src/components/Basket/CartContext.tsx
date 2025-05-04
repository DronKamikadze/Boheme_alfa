// CartContext.tsx
import React, { createContext, useState } from 'react';
import { Item } from '../data';

// Расширяем Item, добавляя обязательное поле quantity
interface CartItem extends Item {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: Item) => void;
  handleRemoveFromCart: (article: string) => void;
  handleQuantityChange: (article: string, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Item) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.article === item.article);
      
      if (existingItem) {
        return prev.map(cartItem => 
          cartItem.article === item.article 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      // Явное преобразование Item в CartItem
      const newCartItem: CartItem = {
        ...item,
        quantity: 1,
        // Инициализация обязательных полей
        price: item.price || 0,
        image: item.image || '',
        color: item.color,
        collection: item.collection,
        style: item.style
      };
      
      return [...prev, newCartItem];
    });
  };

  const handleRemoveFromCart = (article: string) => {
    setCartItems(prev => prev.filter(item => item.article !== article));
  };

  const handleQuantityChange = (article: string, quantity: number) => {
    setCartItems(prev => {
      if (quantity <= 0) {
        return prev.filter(item => item.article !== article);
      }
      return prev.map(item => 
        item.article === article ? { ...item, quantity } : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      handleRemoveFromCart, 
      handleQuantityChange 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
