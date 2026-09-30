function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        The Swap Shop
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/marketplace">Marketplace</a>
        <a href="/login">Login</a>
        <a href="/register">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;