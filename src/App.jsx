import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AgregarTarea from "./components/molecules/AgregarTarea"
import ListaTareas from "./components/organisms/ListaTareas"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 >LISTA DE TAREAS DE MAX1231I</h1>
      <AgregarTarea />
      <ListaTareas />
    </>
  )
}

export default App
