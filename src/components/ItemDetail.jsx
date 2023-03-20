import{useState}from 'react'
import { useParams } from 'react-router-dom'


const ItemDetail = ({productos}) => {
    const [count, setCount] = useState(0)
    const restar=()=>{
        if (count>0) {
            setCount(count-1)
        }
    }
 
    
    const{id}=useParams()
    const filtrarId=productos.filter((producto)=>producto.id.toString()===id)
    
  return (<div className='itemDetailContenedor'>
  {filtrarId.map((filtrar)=>(
    

       <div key={filtrar.id} className="container">
       <div className="imgBx" id={`image${filtrar.id}`}>
           <img src={filtrar.imgUrl} alt={filtrar.nombre}/>
       </div>
       <div className="details">
           <div className="content">
               <h2>{filtrar.nombre} <br/>
                   <span>{filtrar.categoria}</span>
               </h2>
               <p>
                   Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
                   made for all-day, bouncy comfort.
                  
               </p>
              
               <h3>{`:$${filtrar.precio*count}`}</h3>
               <button onClick={()=>count==0?alert("Agrega almenos 1 producto"):setCount(0 ,alert(`${count} unidades de ${filtrar.nombre} agregadas con extio`))}>Agregar</button>
              
           </div>
           <div>
               <button onClick={restar}>-</button>
               <h3>{count}</h3>
               <button onClick={()=>count==filtrar.stock?alert("Producto sin stock"):setCount(count+1)}>+</button>
               </div>
       </div>
       
   </div>

  ))}</div>
  )
}

export default ItemDetail