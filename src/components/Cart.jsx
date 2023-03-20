import React, { useState } from 'react'


const Cart = () => {
    const[nombre,SetNombre]=useState("")
    const[email,SetEmail]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (nombre=="" || email=="") {
            alert("Error:\n complete los datos")
        }

        else{
       alert(`Gracias por la compra ${nombre}.\n enviaremos los detalles a ${email}`)}

    }
  return (
    <div>
    <div className='formulario'>
      <div className="form-container">
    <p>Login</p>
<form onSubmit={handleSubmit} className="form">
    <label>Email</label>
    <input onChange={(e)=>SetEmail(e.target.value)} type="email" className="input" placeholder="Enter yout email"/>
    <label>Name</label>
    <input onChange={(e)=>SetNombre(e.target.value)} type="text" className="input" placeholder="Nombre"/> 
    <button>Enviar</button>
</form>
</div>

    </div>
    </div>
  )
}

export default Cart