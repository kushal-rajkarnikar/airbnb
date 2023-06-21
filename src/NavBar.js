function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo-500x281.png"
            alt="AirBNB Logo"
            height="60px"
            width="auto"
          />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
