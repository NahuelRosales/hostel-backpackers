import './App.css'
import Header from './components/header'
import Habitaciones from './components/sections/habitaciones'
import Inicio from './components/sections/inicio'
import Servicios from './components/sections/servicios'

function App() {

  return (
    <>
      <Header/>
      <Inicio/>
      <Servicios/>
      <Habitaciones/>
    </>
  )
}

export default App
