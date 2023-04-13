import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import React from "react";

const ProductFilter = () => {
  return (
    <>
      <div className="buscar">
        <div className="divFiltrar">
          <p>Filtrar por:</p>
          <Menu className="menuCat">
            <MenuButton
              className="botonCat"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              categorias
            </MenuButton>
            <MenuList className="listaCat">
              <Link className="itemCat" to={`/categoria/${"remeras"}`}>
                {" "}
                <MenuItem className="itemCats">Remeras</MenuItem>
              </Link>
              <Link className="itemCat" to={`/categoria/${"camperas"}`}>
                {" "}
                <MenuItem className="itemCats">Camperas</MenuItem>
              </Link>
              <Link className="itemCat" to={`/categoria/${"botines"}`}>
                {" "}
                <MenuItem className="itemCats">Botines</MenuItem>
              </Link>
              <Link className="itemCat" to={`/categoria/${"shorts"}`}>
                {" "}
                <MenuItem className="itemCats">Shorts</MenuItem>
              </Link>
              <Link className="itemCat" to="/productos">
                {" "}
                <MenuItem className="itemCats">Mostrar todo</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
