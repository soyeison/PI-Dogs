import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../../actions/index.js";
import Navbar from "../Navbar/Navbar.js";
import SelectTemperament from "../SelectTemperament/SelectedTemperament.js";
import "./Creator.css";

//Crear validaciones de formulario(Que no se pueda mandar inputs vacíos, etc.)
export function validate(input) {
  let errors = {};
  if (!Number(input.min_year)) {
    errors.min_year = "*Must be a number";
  } else if (input.min_year.length > 2) {
    errors.min_year = "*Length exceeded";
  }
  if (!Number(input.max_year)) {
    errors.max_year = "*Must be a number";
  } else if (input.max_year.length > 2) {
    errors.max_year = "*Length exceeded";
  }
  if (parseInt(input.min_year) > parseInt(input.max_year)) {
    errors.weight = "*The maximum cannot be greater than the minimum";
  }
  if (input.img) {
    var r = new RegExp(/^(ftp|http|https):[^ "]+$/);
    if (!r.test(input.img)) {
      errors.img = "*Ingrese una URL válida";
    }
  }
  if (input.name.length > 20) {
    errors.name = "*Length exceeded";
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
    if (control.temper.length < 6) {
      setControl({
        ...control,
        temper: [...control.temper, e.target.value],
      });
    } else {
      alert("*Length exceeded");
    }
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
    <div className="contenedor">
      <Navbar />
      <form onSubmit={handleSubmit} className="formulario">
        <div>
          <h1 className="tituloTemperamento">Register Your Dog</h1>
        </div>
        <div className="division">
          <div className="informacion">
            <div className="nombre">
              <label>Name: </label>
              <input
                type="text"
                autoComplete="off"
                name="name"
                value={data["name"]}
                onChange={handleChange}
              />
              <div>{data.name === "" && <span>*Obligatory field</span>}</div>
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div className="altura">
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
              {control.height === "" && <span>*Choose an option</span>}
            </div>
            <div className="peso">
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
              {control.weight === "" && <span>*Choose an option</span>}
            </div>

            <div className="años">
              <div className="tituloAños">
                <h5>Lifespan: </h5>
              </div>
              <div className="datosAños">
                <div>
                  <label>From: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="min_year" //Organizar en columna para evitar que se reacomoden
                    value={data["min_year"]}
                    onChange={handleChange}
                  />
                  {errors.min_year && <span>{errors.min_year}</span>}
                </div>
                <div>
                  <label>To: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="max_year"
                    value={data["max_year"]}
                    onChange={handleChange}
                  />
                  {errors.max_year && <span>{errors.max_year}</span>}
                </div>
              </div>
            </div>
            <div className="errorPeso">
              {errors.weight && <span>{errors.weight}</span>}
            </div>
            <div className="imagenCreator">
              <label>Image: </label>
              <input
                type="text"
                autoComplete="off"
                name="img"
                value={data["img"]}
                placeholder="Ej: 'https://perrito/perritobonito.jpg'"
                onChange={handleChange}
              />
              <div className="imagenCreator">
                {errors.img && <span>{errors.img}</span>}
              </div>
            </div>
          </div>
          <div className="temperamento">
            <label>Tempermanet: </label>
            <select onChange={handleTemperChange}>
              <option>Option: </option>
              {dogsTemper &&
                dogsTemper.map((t) => {
                  return (
                    <option key={t.id_temper} value={t.name}>
                      {t.name}
                    </option>
                  );
                })}
            </select>
            <div className="opcionesTemper">
              <ul className="listaTemper">
                {control.temper &&
                  control.temper.map((e, i) => (
                    <li key={i}>
                      {
                        <SelectTemperament
                          label={e}
                          click={removeTemperament} //Quitar lo puntos que esto genera
                        />
                      }
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          {data.name === "" ||
          control.height === "" ||
          control.weight === "" ||
          errors.min_year ||
          errors.max_year ||
          errors.weight ? (
            <h3 className="prevBoton">Missing Fields to Fill</h3>
          ) : (
            <button className="botonEnviar" type="submit">
              SEND
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
