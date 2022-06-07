import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions/index.js";
import Card from "../Card/Card.js";
import { Link } from "react-router-dom";
import "./Buscador.css";

export default function Buscador(props) {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogs);
  //console.log(dog);

  function handleChange(event) {
    setName(event.target.value);
  }

  //Falta agregar un useEffect para que cuando se cargue el componente me muestre los perros dentro del paginado

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getDogs(name));
  }

  return (
    <div>
      <h2>BUSCADOR</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dog: </label>
          <input
            type="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
        </div>
        <button type="submit">BUSCAR</button>
      </form>

      <ul className="card">
        {dog.length !== 0 &&
          dog.map((e) => (
            <li className="card-list" key={e.id}>
              <Link to={`/home/${e.id}`}>
                {
                  <Card
                    img={e.img}
                    name={e.name}
                    temper={e.temperament}
                    weight={e.weight}
                  />
                }
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
