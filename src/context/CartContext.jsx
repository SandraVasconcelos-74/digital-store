import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }
  const removeFromCart = (index) => {
  setCartItems(cartItems.filter((_, i) => i !== index));
};

const clearCart = () => {
  setCartItems([]);
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
       {children}
    </CartContext.Provider>
   
  );
}
