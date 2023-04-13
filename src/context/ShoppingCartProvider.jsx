import { createContext, useState } from "react";
export const CartContext = createContext();
const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart);
  };

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider value={{ cart, setCart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
