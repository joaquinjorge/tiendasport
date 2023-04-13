import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, stock, imagen }) => {
  return (
    <div className="catalogo-productos__item">
      <div className="product-image-container">
        <img className="product-image" src={imagen} alt={nombre} />
      </div>
      <div className="catalogo-productos__item-overlay">
        <div className="product-stock">
          <span>Stock:</span>
          <span>{stock}</span>
        </div>
        <Link to={`/id/${id}`}>
          <button className="catalogo-productos__item-button">
            Ver Detalles
          </button>
        </Link>
      </div>
      <div className="catalogo-productos__item-fondo"></div>
    </div>
  );
};

export default Item;
