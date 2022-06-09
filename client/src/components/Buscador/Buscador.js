import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getDogsList } from "../../actions/index.js";
import "./Buscador.css";
import Paginado from "../Paginado/Paginado.js";

export default function Buscador(props) {
  //Faltan los botones de ordenamiento
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogsFilter);
  const dogsList = useSelector((state) => state.dogsList); //Este trae todos los perros

  useEffect(() => {
    dispatch(getDogsList());
  }, [dispatch]);

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
      {dog.length === 0 ? (
        <Paginado dogs={dogsList} />
      ) : (
        <Paginado dogs={dog} />
      )}
    </div>
  );
}
