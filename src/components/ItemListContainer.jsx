import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ProductFilter from "./ProductFilter";

const ItemListContainer = () => {
  const [ropa, setRopa] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    getDocs(collection(db, "ropa")).then((querySnapshot) => {
      const ropa = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRopa(ropa);
    });
  }, []);

  if (ropa.length == 0) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  function buscarRopa(e) {
    e.preventDefault();
    const filtrarRopa = ropa.filter((producto) =>
      producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltro(filtrarRopa);
  }

  const filrarCategoria = ropa.filter(
    (producto) => producto.categoria === categoria
  );
  if (!categoria && filtro.length != 0) {
    return (
      <>
        <div className="productFilter">
          {" "}
          <form className="busqueda">
            <label htmlFor="">Buscar:</label>
            <input onInput={buscarRopa} id="inputBuscar" htmlFor="search" />
          </form>
          <ProductFilter />
        </div>

        <div>
          <ItemList productos={filtro} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="productFilter">
        {" "}
        <form className="busqueda">
          <label htmlFor="">Buscar:</label>
          <input onInput={buscarRopa} id="inputBuscar" htmlFor="search" />
        </form>
        <ProductFilter />
      </div>

      <div>
        {categoria ? (
          <ItemList productos={filrarCategoria} />
        ) : (
          <ItemList productos={ropa} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
