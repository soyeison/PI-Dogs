import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions/index.js";
import Card from "../Card/Card.js";
import { Link } from "react-router-dom";
import "./Buscador.css";

export default function Buscador(props) {
  const [name, setName] = useState("");
  const [paginado, setPaginado] = useState({
    prev: 0,
    next: 8,
  });

  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogsFilter); //Hay que organizar el hecho de que cuando se filtra el paginado siga funcionando.
  const dogsList = useSelector((state) => state.dogsList);
  let pag = dog.slice(paginado.prev, paginado.next);

  useEffect(() => {
    dispatch(getDogs(""));
  }, [dispatch, paginado]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getDogs(name));
  }

  const handlePrevClick = () => {
    if (paginado.prev > 0) {
      setPaginado({
        ...paginado,
        prev: paginado.prev - 8,
        next: paginado.next - 8,
      });
    }
  };

  const handleNextClick = () => {
    if (paginado.next < dog.length) {
      setPaginado({
        ...paginado,
        prev: paginado.prev + 8,
        next: paginado.next + 8,
      });
    }
  };

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
        {pag.length !== 0 &&
          pag.map((e) => (
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
      <button onClick={handlePrevClick}>PREV</button>
      <button onClick={handleNextClick}>NEXT</button>
    </div>
  );
}
