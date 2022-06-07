export default function Card(props) {
  return (
    <div>
      <img src={props.img} alt="Poster" />
      <h3>{props.name}</h3>
    </div>
  );
}
