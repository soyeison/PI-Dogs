import React, { useState } from "react";
import Card from "../Card/Card.js";
import { Link } from "react-router-dom";

export default function Paginado(props) {
  //por props me mandan la lista de perros
  const { dogs } = props;
  const [paginado, setPaginado] = useState({
    prev: 0,
    next: 8,
  });

  let pag = dogs.slice(paginado.prev, paginado.next);

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
  return (
    <div>
      <button onClick={handlePrevClick}>PREV</button>
      <button onClick={handleNextClick}>NEXT</button>
      <ul>
        {pag.map((e) => (
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
