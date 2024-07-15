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
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img
                    className="block lg:hidden w-12  h-12 rounded-full	"
                    src={Phone}
                    alt="Logo"
                  />
                  <img
                    className="hidden lg:block  w-12  h-12 rounded-full	"
                    src={Phone}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/BookCatalog"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Book Catalog
                  </Link>
                  <Link
                    to="/Aboutus"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About us
                  </Link>
                  <Link
                    to="/Contactus"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                id="Log_In"
                className="Log_In bg-transparent text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                type="button"
                onClick={handleLogout}
              >
                {localStorage.getItem("issuccess") === "true" ? (
                  <span>Log out</span>
                ) : (
                  <span>Sign up</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
