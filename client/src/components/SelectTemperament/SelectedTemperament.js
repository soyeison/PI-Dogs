export default function SelectTemperament(props) {
  return (
    <div>
      <label>{props.label}</label>
      <button value={props.label} onClick={props.click}>
        x
      </button>
    </div>
  );
}
