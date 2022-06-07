import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions/index.js";
import Card from "../Card/Card.js";

export default function Buscador(props) {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogs);

  function handleChange(event) {
    setName(event.target.value);
  }

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
      {
        <ul>
          {dog.length !== 0 &&
            dog.map((e) => (
              <li key={e.id}>{<Card img={e.img} name={e.name} />}</li>
            ))}
        </ul>
      }
    </div>
  );
}
