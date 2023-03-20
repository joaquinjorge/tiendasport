import React from 'react'
import ItemDetail from './ItemDetail'
import { Link } from "react-router-dom";
import productos from "../../productos.json";

const ItemDetailContainer = () => {
   
    
  return (
    
   
    <div>
    <Link to="/productoss">  <button className='seguirViendo'>Seguir viendo</button></Link>
      <ItemDetail productos={productos}/>
      </div>
  )
}

export default ItemDetailContainer