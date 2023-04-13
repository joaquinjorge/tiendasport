import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const ropaRef = doc(db, "ropa", `${id}`);

    getDoc(ropaRef).then((snapshot) => {
      setProducto({ id: snapshot.id, ...snapshot.data() });
    });
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {" "}
        <Link to="/productos">
          {" "}
          <button className="seguirViendo">Seguir viendo</button>
        </Link>
      </div>
      {<ItemDetail producto={producto} />}
    </div>
  );
};

export default ItemDetailContainer;
