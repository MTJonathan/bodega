import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import './assets/style/App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clientes" element={<h1>About</h1>} />
        <Route path="/Productos" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
