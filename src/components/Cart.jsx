import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import CartForm from "./CartForm";

import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, setCart, removeProduct } = useContext(CartContext);
  const remover = (e) => {
    removeProduct(e.target.id.substring(7));
    toast.error("Producto eliminado", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const sumWithInitial = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.precio * currentValue.quantity,
    0
  );
  const clearCart = () => {
    setCart([]);
    toast.error("Se vacio el carrito", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className="cartMainContainer">
        <h2 className="cartTitle">Carrito</h2>
        {cart.map((cr) => (
          <CartItem key={cr.id} cr={cr} remover={remover} />
        ))}
      </div>
      {cart.length == 0 ? (
        <div className="errorContainer">
          <Link className="volverCarrito" to="/productos">
            <button className="volverCarrito">volver al catalogo</button>
          </Link>
          <h1 className="noProducts">No hay productos en el carrito</h1>
        </div>
      ) : (
        <>
          <div className="cartFormDivider">
            <button className="emptyCart" onClick={clearCart}>
              vaciar carrito
            </button>
            <h2 className="total">
              Total:<strong> $</strong>
              {sumWithInitial}
            </h2>
            <CartForm sumWithInitial={sumWithInitial} />{" "}
          </div>
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Cart;
