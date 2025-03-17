import { Link } from "react-router-dom";
import "./style/nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <header>
        <h3>Bodega Jhoan</h3>
      </header>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/Productos">Productos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
