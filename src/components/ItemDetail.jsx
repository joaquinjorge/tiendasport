import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ producto }) => {
  const { cart, setCart, addProduct } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const restar = () => {
    setCount(count - 1);
  };

  const agregarProducto = () => {
    addProduct(producto, count);
    toast.success("Agregado con exito!", {
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
    <div className="itemDetailContenedor">
      <div className="container">
        <div className="imgBx" id={`image${producto.stock}`}>
          <img src={producto.imgUrl} alt={producto.nombre} />
        </div>
        <div className="details">
          <div className="content">
            <h2>
              {producto.nombre} <br />
              <span>{producto.categoria}</span>
            </h2>
            <p>
              Featuring soft foam cushioning and lightweight, woven fabric in
              the upper, the Jordan Proto-Lyte is made for all-day, bouncy
              comfort.
            </p>

            <h3>{`:$${producto.precio * count}`}</h3>
            <button onClick={agregarProducto}>Agregar</button>

            {cart.length !== 0 ? (
              <Link to="/carrito">
                {" "}
                <button style={{ fontSize: "13px", color: "white" }}>
                  Finalizar
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
          <div>
            <button disabled={count <= 1} onClick={restar}>
              -
            </button>
            <h3>{count}</h3>
            <button
              style={{ backgroundColor: count == producto.stock ? "red" : "" }}
              onClick={() =>
                count == producto.stock
                  ? toast.error("Sin Stock", {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    })
                  : setCount(count + 1)
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
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

export default ItemDetail;
