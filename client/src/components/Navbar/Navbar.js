import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <ul className="lista">
        <li className="menuLink">
          <Link className="elemento" exact to="/home">
            Home
          </Link>
        </li>
        <li className="menuLink">
          <Link className="elemento" to="/creator">
            Add a Dog
          </Link>
        </li>
      </ul>
    </div>
  );
}
