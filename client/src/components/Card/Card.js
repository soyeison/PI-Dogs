import "./Card.css";

export default function Card(props) {
  return (
    <div className="elemento">
      <div>
        <img className="img" src={props.img} alt="Poster" />
      </div>
      <div className="detalles">
        <h3 className="tituloRaza">{props.name}</h3>
        <p>Temperament: {props.temper}</p>
        <p>Weight: {props.weight} lb</p>
      </div>
    </div>
  );
}
