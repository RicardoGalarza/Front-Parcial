import { useState } from "react"
import './App.css'
import Form from './components/Form'
import Libros from './components/Libros'



function App() {
 const [comprar, setComprar] = useState({

  libros: {},
  form: false

 })

  let libros =[
    {id: 1, nombre: 'Hasta la luna', direccion: 'Jorge Luis Borges'},
  ]
  return (
    <>
    
    {comprar.form && <Form libros={comprar.libros}/>}
      {libros.map((item) => <Libros key={item.id} setComprar={setComprar} item={item}/>) }
    </>
  )
}

export default App
