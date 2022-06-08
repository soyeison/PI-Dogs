import { useState } from "react";
import { useDispatch } from "react-redux";
import { postDog } from "../../actions/index.js";

//Crear validaciones de formulario(Que no se pueda mandar inputs vacíos, etc.)

export default function Creator() {
  const [data, setData] = useState({
    name: "",
    height: "", //Altura
    weight: "", //Peso
    year: "",
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postDog(data.name, data.height, data.weight, data.year));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            value={data["name"]}
            onChange={handleChange}
          />
          <label>Altura: </label> {/* Poner en ingles despues */}
          <input
            type="text"
            autoComplete="off"
            name="height"
            value={data["height"]}
            onChange={handleChange}
          />
          <label>Peso: </label>
          <input
            type="text"
            autoComplete="off"
            name="weight"
            value={data["weight"]}
            onChange={handleChange}
          />
          <label>Años de vida: </label>
          <input
            type="text"
            autoComplete="off"
            name="year"
            value={data["year"]}
            onChange={handleChange}
          />
        </div>
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}
