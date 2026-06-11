function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Tech blog</h1>
        <nav>
          <ul className="nav-link">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Article</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
