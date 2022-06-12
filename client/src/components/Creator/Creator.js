import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../../actions/index.js";
import SelectTemperament from "../SelectTemperament/SelectedTemperament.js";

//Crear validaciones de formulario(Que no se pueda mandar inputs vacíos, etc.)
export function validate(input) {
  let errors = {};
  if (!Number(input.min_year)) {
    errors.min_year = "debe ser un numero";
  } else if (!Number(input.max_year)) {
    errors.max_year = "debe ser un numero";
  } else if (parseInt(input.min_year) > parseInt(input.max_year)) {
    errors.weight = "El maximo no puede ser mayor que el minimo";
  }
  return errors;
}

export default function Creator() {
  //Validaciones
  const [errors, setErrors] = useState({});
  const [control, setControl] = useState({
    height: "",
    weight: "",
    temper: [],
  });
  const [data, setData] = useState({
    name: "",
    min_year: "",
    max_year: "",
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

    setErrors(
      validate({
        ...data,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    let temperament = control.temper.join(", ");
    let years = data.min_year + " - " + data.max_year;
    event.preventDefault();
    dispatch(
      postDog(
        data.name,
        control.height,
        control.weight,
        years,
        /* data.year, */
        data.img,
        temperament
      )
    );
    alert("Raza creada con exito");
    setData({
      name: "",
      min_year: "",
      max_year: "",
      img: "",
    });
    setControl({
      height: "",
      weight: "",
      temper: [],
    });
  }

  function handleTemperChange(e) {
    e.preventDefault();
    setControl({
      ...control,
      temper: [...control.temper, e.target.value],
    });
  }

  function handleWeightChange(e) {
    e.preventDefault();
    setControl({
      ...control,
      weight: e.target.value,
    });
  }

  function handleHeightChange(e) {
    e.preventDefault();
    setControl({
      ...control,
      height: e.target.value,
    });
  }

  function removeTemperament(e) {
    e.preventDefault();
    setControl({
      ...control,
      temper: control.temper.filter((element) => element !== e.target.value),
    });
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
          {data.name === "" && <label>Campo obligatorio</label>}
          <label>Height (In): </label> {/* Poner en ingles despues */}
          <select onChange={handleHeightChange}>
            <option value="">Option</option>
            <option value="20 - 30">20 - 30</option>
            <option value="30 - 40">30 - 40</option>
            <option value="40 - 50">40 - 50</option>
            <option value="50 - 60">50 - 60</option>
            <option value="60 - 70">60 - 70</option>
            <option value="70 - 90">70 - 90</option>
          </select>
          {control.height === "" && <label>Elija una opcion</label>}
          <label>Weight (Lb): </label>
          <select onChange={handleWeightChange}>
            <option value="">Option</option>
            <option value="1 - 2">1 - 2</option>
            <option value="2 - 4">2 - 4</option>
            <option value="4 - 8">4 - 8</option>
            <option value="8 - 15">8 - 15</option>
            <option value="15 - 30">15 - 30</option>
            <option value="30 - 50">30 - 50</option>
            <option value="50 - 70">50 - 70</option>
            <option value="70 - 90">70 - 90</option>
          </select>
          {control.weight === "" && <label>Elija una opcion</label>}
          <label>Años de vida: </label>
          <label>Desde: </label>
          <input
            type="text"
            autoComplete="off"
            name="min_year"
            value={data["min_year"]}
            onChange={handleChange}
          />
          {errors.min_year && <label>{errors.min_year}</label>}
          <label>Hasta: </label>
          <input
            type="text"
            autoComplete="off"
            name="max_year"
            value={data["max_year"]}
            onChange={handleChange}
          />
          {errors.max_year && <label>{errors.max_year}</label>}
          {errors.weight && <label>{errors.weight}</label>}
          <label>Image: </label>
          <input
            type="text"
            autoComplete="off"
            name="img"
            value={data["img"]}
            placeholder="Ej: 'https://perrito/perritobonito.jpg'"
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
          <div>
            <ul>
              {control.temper &&
                control.temper.map((e, i) => (
                  <li key={i}>
                    {<SelectTemperament label={e} click={removeTemperament} />}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* Se va a agregar una forma de habilitar el boton */}
        {data.name === "" ||
        control.height === "" ||
        control.weight === "" ||
        errors.min_year ||
        errors.max_year ||
        errors.weight ? (
          <p>Faltan campos por rellenar</p>
        ) : (
          <button type="submit">ENVIAR</button>
        )}
      </form>
    </div>
  );
}
