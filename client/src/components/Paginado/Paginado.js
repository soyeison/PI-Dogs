import React, { useState } from "react";
import Card from "../Card/Card.js";
import { Link } from "react-router-dom";
import "./Paginado.css";

export default function Paginado(props) {
  //por props me mandan la lista de perros
  var { dogs, paginado, setPaginado } = props;

  var paginas = [];
  const [click, setClick] = useState(1);
  for (let i = 0; i < Math.ceil(dogs.length / 8); i++) {
    paginas.push(i + 1);
  }

  const handlePrevClick = () => {
    if (paginado.prev > 0) {
      setPaginado({
        prev: paginado.prev - 8,
        next: paginado.next - 8,
      });
      setClick(click - 1);
    }
  };

  const handleNextClick = () => {
    if (paginado.next < dogs.length) {
      setPaginado({
        prev: paginado.prev + 8,
        next: paginado.next + 8,
      });
      setClick(click + 1);
    }
  };

  function paginaClick(pagina) {
    const indexUltimo = pagina * 8;
    const indexPrimero = indexUltimo - 8;
    setPaginado({
      prev: indexPrimero,
      next: indexUltimo,
    });
    setClick(pagina);
  }

  let pag = dogs.slice(paginado.prev, paginado.next);

  console.log("Este es pag", pag);
  console.log("paginado prev", paginado.prev);
  console.log("paginado next", paginado.next);
  /*   console.log("Este es pagBoton", pagBoton); */
  return (
    <div>
      <button className="paginaBoton" onClick={handlePrevClick}>
        ←
      </button>
      {paginas &&
        paginas.map((p) => (
          <button
            className={click === p ? "clickpaginaBoton" : "paginaBoton"}
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
        {pag.map((e) => (
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
