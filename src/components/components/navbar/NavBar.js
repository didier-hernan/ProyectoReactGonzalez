
import './estilos.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Productos On-Line
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="nav-link btn btn-link" href="#">
              Inicio
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" href="#">
              Productos
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" href="#">
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;