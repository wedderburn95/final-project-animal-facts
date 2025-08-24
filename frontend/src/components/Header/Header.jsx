import { Link } from "react-router-dom";
import headerLogo from "../../../assets/logo.png";
import "./Header.css";

function Header({ onLoginClick, onSignupClick }) {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img
            src={headerLogo}
            alt="Animal Facts Logo"
            className="header__logo"
          />
        </Link>
      </div>

      <h1 className="header__title">Animal Facts & Fun</h1>

      <nav className="header__nav">
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/about" className="header__link">
          About
        </Link>
        <button className="header__btn" onClick={onLoginClick}>
          Log In
        </button>
        <button className="header__btn" onClick={onSignupClick}>
          Sign Up
        </button>
      </nav>
    </header>
  );
}

export default Header;
