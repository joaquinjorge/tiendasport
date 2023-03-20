import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import productos from "../../productos.json"



const ItemListContainer = () => {

  const {categoria}=useParams()
  
      
      const getProductos = () => {
        return new Promise((resolve, reject) => {
          if (productos.length === 0) {
            reject(new Error("no hay datos"));
          }
          setTimeout(() => {
            resolve(productos);
          }, 2000);
        });
      };
     
    
      async function fetchingProductos(params) {
        try {
          const productosFetched = await getProductos();
          console.log(productosFetched)
        } catch (error) {
          console.log(error);
        }
      }
      fetchingProductos();
      
     
      const filrarCategoria=productos.filter((producto)=>producto.categoria===categoria)
  return (
    <div>
       {categoria? <ItemList productos={filrarCategoria}/>:<ItemList productos={productos}/>}
    </div>
  )
}

export default ItemListContainer