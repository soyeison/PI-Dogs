import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.js";
import { Link } from "react-router-dom";
import { getDogsList } from "../../actions/index.js";

export default function Paginado(props) {
  //Aqui quiero agregar mostrar de a 8 perros y los botones de ordenamiento
  //por props me mandan la lista de perros
  const { dogs } = props;
  const [paginado, setPaginado] = useState({
    prev: 0,
    next: 8,
  });

  const dispatch = useDispatch();
  const dogsList = useSelector((state) => state.dogsList);
  let pag = dogsList.slice(paginado.prev, paginado.next);

  useEffect(() => {
    dispatch(getDogsList());
  }, [dispatch]);

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
    if (paginado.next < dogsList.length) {
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
        {dogs === undefined &&
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
