import headerLogo from "../assets/logo.png";

function Header() {
  return (
    <div>
      <img className="header__logo" src={headerLogo} alt="Hello Vite Logo" />
      <h1>Fun Animal Facts!</h1>
    </div>
  );
}

export default Header;
