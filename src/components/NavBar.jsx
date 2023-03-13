import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <>
    <header>
    <div className='header'>
    <div className='logo'>
        <a className='inicio' href="">
            <img src="https://res.cloudinary.com/dtzqfg4nr/image/upload/v1677525893/store_xqcvtk.png" alt="logo"/>
            <h1>TiendaSport</h1>
        </a>


    </div>
  
<CartWidget/>
</div>

</header>
<div className='buscar'>
  <form className='busqueda'>
      <label htmlFor="">Buscar:</label>
      <input id="inputBuscar" htmlFor="search"/>
  </form>
  <div>
      <label className='filtrado' htmlFor="shop">Categoria:</label>

      <select id="shop">
          <option defaultValue="selected">...</option>
          <option value="remera">Remeras</option>
          <option value="campera">Camperas</option>
          <option value="botines">Botines</option>
          <option value="short">Shorts</option>
      </select>
  </div>
</div>

</>
 
  )
}

export default NavBar