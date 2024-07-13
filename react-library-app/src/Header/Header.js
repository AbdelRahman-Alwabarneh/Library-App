import "./Header.css";
import Phone from "../Photo/logo.png";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("issuccess");
    localStorage.removeItem("FormLocalStorage");
    localStorage.removeItem("First_Name");
    navigate("/singup");
  };

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
          <Link to="/" className="navbar-brand">
            <img
              className="d-inline-block align-text-center"
              src={Phone}
              alt="Logo"
            />
          </Link>
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
              <li className="iitem nav-item">
                <Link to="/" className="nav-link fw-bold fs-5">
                  Home
                </Link>
              </li>
              <li className="iitem nav-item">
                <Link to="/BookCatalog" className="nav-link fw-bold fs-5">
                  Book Catalog
                </Link>
              </li>
              <li className="iitem nav-item">
                <Link to="/Aboutus" className="nav-link fw-bold fs-5">
                  About us
                </Link>
              </li>
              <li className="iitem nav-item">
                <Link to="/Contactus" className="nav-link fw-bold fs-5">
                  Contact us
                </Link>
              </li>
            </ul>
            <button
              id="Log_In"
              className="Log_In btn btn-outline-danger ms-2"
              type="button"
              onClick={handleLogout}
            >
              {localStorage.getItem("issuccess") === "true" ? (
                <span>Log out</span>
              ) : (
                <span>Sing up</span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
