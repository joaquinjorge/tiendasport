import React from 'react'
import {Link} from "react-router-dom";

const Item = ({id,categoria,nombre,stock,precio,imagen}) => {
  return (
    <div id={id} key={id} className='producto'>
    <img src={imagen} alt="imageproduct" />
    <h3>Stock:{stock}</h3>
    <Link to={`/id/${id}`}><button className='botonCarro'>Ver Detalles</button></Link>
    </div>
  )
}

export default Item