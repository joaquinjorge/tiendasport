import React from "react";

const CartItem = ({ cr, remover }) => {
  return (
    <div key={cr.id} className="cart-item">
      <img src={cr.imgUrl} alt={cr.nombre} />
      <h4 className="cart-item-name">{cr.nombre}</h4>
      <span className="cart-item-price">$:{cr.precio * cr.quantity}</span>
      <span className="cart-item-quantity">{cr.quantity}</span>
      <button
        id={`remover${cr.id}`}
        className="cart-item-remove"
        onClick={remover}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
