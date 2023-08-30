//import './App.css'
import { Route, Routes } from 'react-router-dom'
import MenuLayout from './menu/MenuLayout'
import Menu from './menu/MenuLayout'
import Opciones from './menu/Opciones'
import Alumno from './paginas/alumno/Alumno'
import Profesor from './paginas/profesor/Profesor'
import Grado from './paginas/grado/Grado'
import Asignacion from './paginas/asignacion/Asignacion'

function App() {
  return (
    <>
      <MenuLayout>
        <Routes>
        <Route path="/" element={<Opciones />} />
        <Route path="/alumno" element={<Alumno />} />
        <Route path="/profesor" element={<Profesor />} />
        <Route path="/grado" element={<Grado />} />
        <Route path="/asignacion" element={<Asignacion />} />
      </Routes>
      </MenuLayout>     
    </>
  )
}

export default App
