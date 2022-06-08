import "./Card.css";

export default function Card(props) {
  return (
    <div className="elemento">
      <img className="img" src={props.img} alt="Poster" />
      <div className="texto">
        <h3>Breed: {props.name}</h3>
        <p>Temperament: {props.temper}</p>
        <p>Weight: {props.weight} lb</p>
      </div>
    </div>
  );
}
