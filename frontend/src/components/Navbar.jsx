import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">The Swap Shop</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        <Link to="/marketplace">
          Marketplace
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;