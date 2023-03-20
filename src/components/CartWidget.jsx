import { Link } from "react-router-dom";
import React from 'react'


const CartWidget = () => {
  return (
    <nav className='nav'>
   <Link className="cartLink" to="/carrito"> <button id="buttonCarro" className='enlaces'>
      <i className='fa-brands fa-shopify'></i>
            <li>
                <p>4</p>
            </li>
        
    </button>
    </Link>
  
    




</nav>
  )
}

export default CartWidget