import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../../actions/index.js";

//Crear validaciones de formulario(Que no se pueda mandar inputs vacíos, etc.)
//Agregagr 3 seleccionables: para que el usuario seleccione peso, altura y temperamento

export default function Creator() {
  const [temper, setTemper] = useState([]);
  console.log(temper);
  const [data, setData] = useState({
    name: "",
    height: "", //Altura
    weight: "", //Peso
    year: "",
    img: "",
  });
  const dogsTemper = useSelector((state) => state.dogsTemper);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    let temperament = temper.join(", ");
    event.preventDefault();
    dispatch(
      postDog(
        data.name,
        data.height,
        data.weight,
        data.year,
        data.img,
        temperament
      )
    );
  }

  function handleTemperChange(e) {
    e.preventDefault();
    setTemper([...temper, e.target.value]);
  }

  console.log("Este es el temper de creator", dogsTemper);
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
          <label>Image: </label>
          <input
            type="text"
            autoComplete="off"
            name="img"
            value={data["img"]}
            onChange={handleChange}
          />
          <label>Tempermanet: </label>
          <select onChange={handleTemperChange}>
            {dogsTemper &&
              dogsTemper.map((t) => {
                return (
                  <option key={t.id_temper} value={t.name}>
                    {t.name}
                  </option>
                );
              })}
          </select>
        </div>
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}
