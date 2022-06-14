import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="contenedorNav">
      <ul className="lista">
        <li className="menuLink">
          <Link className="elementoNav" exact to="/home">
            <span>Home</span>
          </Link>
        </li>
        <li className="menuLink">
          <Link className="elementoNav" to="/creator">
            <span>Add a Dog</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
