import React, { useState } from "react";
import Card from "../Card/Card.js";
import { Link } from "react-router-dom";
import "./Paginado.css";

export default function Paginado(props) {
  //por props me mandan la lista de perros
  var { dogs } = props;
  const [order, setOrder] = useState(true); //Este estado lo puedo utilizar luego para filtrar tambien por temperamento
  const [paginado, setPaginado] = useState({
    prev: 0,
    next: 8,
  });

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
    if (paginado.next < dogs.length) {
      setPaginado({
        ...paginado,
        prev: paginado.prev + 8,
        next: paginado.next + 8,
      });
    }
  };

  function handleOrderChange(e) {
    dogs = dogs.sort((a, b) => a.name.localeCompare(b.name));
    if (e.target.value === "a - z") {
      setOrder(true);
    }
    if (e.target.value === "z - a") {
      dogs = dogs.reverse();
      setOrder(false);
    }
  }

  let pag = dogs.slice(paginado.prev, paginado.next);
  return (
    <div>
      <select onChange={handleOrderChange}>
        <option>Order</option>
        <option>a - z</option>
        <option>z - a</option>
      </select>
      <button onClick={handlePrevClick}>PREV</button>
      <button onClick={handleNextClick}>NEXT</button>
      <ul className="card">
        {pag.map((e) => (
          <li className="card-list" key={e.id}>
            <Link className="card-link" to={`/home/${e.id}`}>
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
