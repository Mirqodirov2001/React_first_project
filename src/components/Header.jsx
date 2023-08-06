const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <a className="logo" href="#">NOICELAND</a>

          <ul className="nav__list">
            <li className="nav__list--item">Home</li>
            <li className="nav__list--item">Latest</li>
            <li className="nav__list--item">About</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
