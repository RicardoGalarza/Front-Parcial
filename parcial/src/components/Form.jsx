import { useState } from "react"

const Form = ({libros}) => {

const [comprarLibros, setComprarLibros] = useState({
    nombre: '',
    direccion: ''
})
    const [show, setShow]= useState(false)
    const [err, setErr] = useState(false)
    const handleSubmit = () =>{
        event.preventDefault()
        if(comprarLibros.nombre.length > 2 && comprarLibros.direccion.length > 5){
            setShow(true)
        }else{
            setErr(true)
        }
            
    }
    return (
        <div>
            <p>Quieres comprar este libro: {libros.nombre}</p>
            <form onSubmit={handleSubmit}>
                <label>Nombre Completo</label>
                <input type="text" onChange={(event) => setComprarLibros({...comprarLibros, nombre: event.target.value})} />
                <label>Direccion</label>
                <input type="text" onChange={({target}) => setComprarLibros({...comprarLibros, direccion: event.target.value})}/>
                <button>comprar</button>
            </form>
            {show && <h4>{comprarLibros.nombre}, Se realizo la compra exitosa</h4>}
            {err &&  <p>Por favor chequea que la información sea correcta</p>}
            <hr />
        </div>
    )
}

export default Form