import { Link } from "react-router-dom";
import "./Landing.css";

//Hay que ponerle más CSS
export default function Landing() {
  return (
    <div className="landing">
      <h1>Bienvenido</h1>
      <h2>
        <Link to="/home">Ingresar</Link>
      </h2>
    </div>
  );
}
