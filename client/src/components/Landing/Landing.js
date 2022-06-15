import { Link } from "react-router-dom";
import "./Landing.css";

//Hay que ponerle más CSS
export default function Landing() {
  return (
    <div className="landing">
      <div className="infoLanding">
        <h1 className="ingreso">
          <Link className="link" to="/home">
            ¡Welcome! Find your dog
          </Link>
        </h1>
      </div>
    </div>
  );
}
