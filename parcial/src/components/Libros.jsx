import React from "react"

const Libros =({item, setComprar}) =>{
return (
    <div>
        <h3>Libros {item.nombre}</h3>
        <h4>direccion{item.direccion}</h4>
        <button onClick={()=> setComprar({libros: item, form : true})}>Comprar</button>
    </div>
)

}

export default Libros