import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

function NavBar({ cartCount, title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
       
        <Link className="navbar-brand" to="/">
          <img src="../src/assets/supremepreview.png" alt="SupremeFit Logo" style={{ height: '40px', marginRight: '10px' }} />
          {title}
        </Link>
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
              <Link
                className="nav-link active"
                
                aria-current="page"
                to="/category/Proteinas"
              >
                Proteínas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Creatina">
                Creatina
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Vitaminas">
                Vitaminas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Ganadores">
                Ganadores de Masa
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <CardWidget cartCount={cartCount} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;