import "./SelectedTemperament.css";

export default function SelectTemperament(props) {
  return (
    <div className="elementoTemper">
      <label>{props.label}</label>
      <button className="botonTemper" value={props.label} onClick={props.click}>
        x
      </button>
    </div>
  );
}
