import CardWidget from "../CardWidget.jsx";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/context.jsx";
import "./NavBar.css";

function NavBar({ cartCount, title }) {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="../src/assets/supremepreview.png"
            alt="SupremeFit Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          {title}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/category/Proteinas"
              >
                Proteínas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/category/Creatina"
              >
                Creatina
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/category/Vitaminas"
              >
                Vitaminas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/category/Ganadores"
              >
                Ganadores de Masa
              </NavLink>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="btn btn-outline-secondary me-2"
          >
            {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
          </button>
          <form className="d-flex" role="search">
            <CardWidget cartCount={cartCount} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
