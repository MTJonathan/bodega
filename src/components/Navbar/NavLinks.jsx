import { NavLink } from "react-router-dom"

const NavLinks = ({to, children}) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>
        {children}
    </NavLink>
  )
}

export default NavLinks
