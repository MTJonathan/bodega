import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./style/nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <header>
        <h3>Bodega Jhoan</h3>
      </header>
      <ul>
        <li>
          <NavLinks to="/"> Inicio </NavLinks>
        </li>
        <li>
          <NavLinks to="/Clientes"> Clientes </NavLinks>
        </li>
        <li>
          <NavLinks to="/Productos"> Productos </NavLinks>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
