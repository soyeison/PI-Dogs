import "./Card.css";

export default function Card(props) {
  return (
    <div className="elemento">
      <div className="imagenCard">
        <img src={props.img} alt="Poster" />
      </div>
      <div className="detalles">
        <h3 className="tituloRaza">{props.name}</h3>
        <p>
          <label>Temperament: </label>
          {props.temper}
        </p>
        <p>
          <label>Weight: </label>
          {props.weight} lb
        </p>
      </div>
    </div>
  );
}
