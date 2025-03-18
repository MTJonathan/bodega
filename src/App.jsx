import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Productos from './components/Productos/Productos'
import Clientes from './components/Clientes/Clientes'
import './assets/style/App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
