import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'


const ItemList = ({productos}) => {
   const {categoria}=useParams()


  
  return (<>
  <div className='hero'>
   <h2 className='tituloCat'>{categoria?categoria:"Nuestros productos"}</h2>
 </div>
    <div className='contenedor'>
      
       {productos.map((producto)=>(
        <Item
        key={producto.id}
       id={producto.id}
    categoria={producto.categoria}
    nombre={producto.nombre}
    stock={producto.stock}
    precio={producto.precio}
    imagen={producto.imgUrl}/>
  
       ))}
       
       </div>
       </>
      )}
  


export default ItemList