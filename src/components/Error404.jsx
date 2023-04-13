import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error">
      Error404
      <p>Not Found</p>
      <Link to="/">
        {" "}
        <button>Volver al Inicio</button>
      </Link>
    </div>
  );
};

export default Error404;
