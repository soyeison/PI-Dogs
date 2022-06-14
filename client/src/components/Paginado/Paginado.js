import React, { useState } from "react";
import Card from "../Card/Card.js";
import { Link } from "react-router-dom";
import "./Paginado.css";

export default function Paginado(props) {
  //por props me mandan la lista de perros
  var { dogs } = props;
  var paginas = [];
  const [pagBoton, setPagBoton] = useState([]);
  const [paginado, setPaginado] = useState({
    prev: 0,
    next: 8,
  });

  for (let i = 0; i < Math.ceil(dogs.length / 8); i++) {
    paginas.push(i + 1);
  }

  const handlePrevClick = () => {
    setPagBoton([]);
    if (paginado.prev > 0) {
      setPaginado({
        prev: paginado.prev - 8,
        next: paginado.next - 8,
      });
    }
  };

  const handleNextClick = () => {
    setPagBoton([]);
    if (paginado.next < dogs.length) {
      setPaginado({
        prev: paginado.prev + 8,
        next: paginado.next + 8,
      });
    }
  };

  let pag = dogs.slice(paginado.prev, paginado.next);

  function paginaClick(pagina) {
    const indexUltimo = pagina * 8;
    const indexPrimero = indexUltimo - 8;
    setPagBoton(dogs.slice(indexPrimero, indexUltimo));
    setPaginado({
      prev: indexPrimero,
      next: indexUltimo,
    });
  }

  return (
    <div>
      <button className="paginaBoton" onClick={handlePrevClick}>
        ←
      </button>
      {paginas &&
        paginas.map((p) => (
          <button
            className="paginaBoton"
            onClick={() => paginaClick(p)}
            value={p}
          >
            {p}
          </button>
        ))}
      <button className="paginaBoton" onClick={handleNextClick}>
        →
      </button>
      <ul className="card">
        {pagBoton.length !== 0
          ? pagBoton.map((e) => (
              <li>
                <Link className="card-link" to={`/home/${e.id}`}>
                  {
                    <Card
                      img={e.img}
                      name={e.name}
                      temper={e.tempers}
                      weight={e.weight}
                    />
                  }
                </Link>
              </li>
            ))
          : pag.map((e) => (
              <li className="card-list" key={e.id}>
                <Link className="card-link" to={`/home/${e.id}`}>
                  {
                    <Card
                      img={e.img}
                      name={e.name}
                      temper={e.tempers}
                      weight={e.weight}
                    />
                  }
                </Link>
              </li>
            ))}
      </ul>
      <button className="paginaBoton" onClick={handlePrevClick}>
        ←
      </button>
      {paginas &&
        paginas.map((p) => (
          <button
            className="paginaBoton"
            onClick={() => paginaClick(p)}
            value={p}
          >
            {p}
          </button>
        ))}
      <button className="paginaBoton" onClick={handleNextClick}>
        →
      </button>
    </div>
  );
}
