import { Link } from "react-router-dom";
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="logo">
            <Link to="/">
              {" "}
              <div className="inicio" href="">
                <img
                  src="https://res.cloudinary.com/dtzqfg4nr/image/upload/v1677525893/store_xqcvtk.png"
                  alt="logo"
                />
                <h1>TiendaSport</h1>
              </div>
            </Link>
          </div>

          <CartWidget />
        </div>
      </header>
    </>
  );
};

export default NavBar;
