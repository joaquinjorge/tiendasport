import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";

const CartWidget = () => {
  const { cart, setCart } = useContext(CartContext);
  const sumWithInitial = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  return (
    <nav className="nav">
      <Link className="cartLink" to="/carrito">
        {" "}
        <button id="buttonCarro" className="enlaces">
          <i className="fa-brands fa-shopify"></i>
          <li>
            <p>{sumWithInitial || ""}</p>
          </li>
        </button>
      </Link>
    </nav>
  );
};

export default CartWidget;
