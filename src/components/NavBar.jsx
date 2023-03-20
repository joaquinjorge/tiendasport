import {Link} from "react-router-dom"
import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";



const NavBar = () => {
  return (
    <>
    <header>
    <div className='header'>
    <div className='logo'>
       <Link to="/"> <div className='inicio' href="">
            <img src="https://res.cloudinary.com/dtzqfg4nr/image/upload/v1677525893/store_xqcvtk.png" alt="logo"/>
            <h1>TiendaSport</h1>
        </div>
        </Link>


    </div>
  
<CartWidget/>
</div>

</header>
<div className='buscar'>
  <form className='busqueda'>
      <label htmlFor="">Buscar:</label>
      <input id="inputBuscar" htmlFor="search"/>
  </form>
  <div className="divFiltrar">
    <p>Filtrar por:</p>
  <Menu className='menuCat' >
  <MenuButton  className='botonCat' as={Button} rightIcon={<ChevronDownIcon />}>
    categorias
  
  </MenuButton>
  <MenuList className="listaCat">
   <Link  className='itemCat'  to={`/categoria/${"remeras"}`}> <MenuItem className='itemCats'>Remeras</MenuItem></Link>
   <Link className='itemCat' to={`/categoria/${"camperas"}`}> <MenuItem className='itemCats'>Camperas</MenuItem></Link>
   <Link className='itemCat' to={`/categoria/${"botines"}`}> <MenuItem className='itemCats'>Botines</MenuItem></Link>
   <Link className='itemCat'  to={`/categoria/${"shorts"}`}> <MenuItem className='itemCats'>Shorts</MenuItem></Link>
   <Link className='itemCat' to="/productos"> <MenuItem className='itemCats'>Mostrar todo</MenuItem></Link>
  </MenuList>
</Menu>

      
       
          
    
  </div>
</div>

</>
 
  )
}

export default NavBar