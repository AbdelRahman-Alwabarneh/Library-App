import "./Header.css";
import Phone from "../Photo/logo.png";
function NavBar() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="d-inline-block align-text-center"
              src={Phone}
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold fs-5" href="#menu">
                  Heart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold fs-5" href="#">
                  Brain
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold fs-5" href="#">
                  Location
                </a>
              </li>
              <li className="drop-down nav-item dropdown fs-5">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="tel:+962778997053">
                      <i className="fa-solid fa-phone"></i> Phone
                    </a>
                    <a
                      className="dropdown-item"
                      href="mailto:abdelRahmanalwabarneh@gmail.com"
                    >
                      <i className="fa-solid fa-envelope-open-text"></i> Email
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
