import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link exact to="/home">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/creator">CREATOR</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
