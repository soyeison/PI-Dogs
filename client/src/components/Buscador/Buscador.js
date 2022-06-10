import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogsName,
  getDogsList,
  getOrderName,
  getOrderWeight,
  getTemperaments,
  filerTemp,
} from "../../actions/index.js";
import "./Buscador.css";
import Paginado from "../Paginado/Paginado.js";

export default function Buscador(props) {
  //Faltan los botones de ordenamiento
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");

  const dispatch = useDispatch();
  const dogsTemper = useSelector((state) => state.dogsTemper);
  var dogsList = useSelector((state) => state.dogsList); //Este trae todos los perros

  useEffect(() => {
    dispatch(getDogsList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getDogsName(name));
  }

  function handleOrderChange(e) {
    e.preventDefault();
    dispatch(getOrderName(e.target.value));
    setOrder(e.target.value);
  }

  function handleWeightChange(e) {
    e.preventDefault();
    dispatch(getOrderWeight(e.target.value));
    setOrder(e.target.value);
  }

  function handleTemperChange(e) {
    e.preventDefault();
    dispatch(filerTemp(e.target.value));
    setOrder(e.target.value);
  }

  return (
    <div>
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
      </div>
      <div>
        <label>Filtrar por: </label>
        <select onChange={handleTemperChange}>
          {dogsTemper &&
            dogsTemper.map((t) => {
              return <option value={t.name}>{t.name}</option>;
            })}
        </select>
      </div>
      <div>
        <label>Order: </label>
        <select onChange={handleOrderChange}>
          <option value="ascendente">a - z</option>
          <option value="descendente">z - a</option>
        </select>
      </div>
      <div>
        <label>Weight: </label>
        <select onChange={handleWeightChange}>
          <option value="asc">ASC</option>
          <option value="des">DES</option>
        </select>
      </div>
      {<Paginado dogs={dogsList} />}
    </div>
  );
}
