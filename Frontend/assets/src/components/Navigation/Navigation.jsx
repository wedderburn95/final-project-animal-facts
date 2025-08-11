import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
        </nav>
    );
}
export default Navigation;