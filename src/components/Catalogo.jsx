import React from 'react'
import { Link } from 'react-router-dom'

const Catalogo = (props) => {
  return (
    <>
    <div className='hero'>
   <Link className='titulo' to="productoss"> <button ><h2 className='titulo'> {props.greeting}</h2></button></Link>
</div>
<div className='imagenPrincipal'>
  <img src="https://res.cloudinary.com/dtzqfg4nr/image/upload/v1678735549/vecteezysoftballillustration3aa0521_generated_b2l2ij.jpg" alt="" />
  

  </div>
</>

  )
}

export default Catalogo