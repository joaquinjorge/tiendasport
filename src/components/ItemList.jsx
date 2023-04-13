import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ productos }) => {
  const { categoria } = useParams();

  return (
    <>
      <section className="catalogo-productos">
        <h2 className="catalogo-productos__title">
          {categoria ? categoria : "Nuestros productos"}
        </h2>

        <div className="catalogo-productos__items">
          {productos.map((producto) => (
            <Item
              key={producto.id}
              id={producto.id}
              categoria={producto.categoria}
              nombre={producto.nombre}
              stock={producto.stock}
              precio={producto.precio}
              imagen={producto.imgUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ItemList;
