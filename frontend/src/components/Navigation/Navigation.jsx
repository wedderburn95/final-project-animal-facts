import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link">
        Home
      </NavLink>
      <NavLink to="/about" className="navigation__link">
        About
      </NavLink>
    </nav>
  );
}
export default Navigation;
