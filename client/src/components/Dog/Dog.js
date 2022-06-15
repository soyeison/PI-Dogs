import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Dog.css";
import { getDogsList } from "../../actions";
import Navbar from "../Navbar/Navbar";

export default function Dog(props) {
  var dogsId;
  const dispatch = useDispatch();
  const dogsList = useSelector((state) => state.dogsList);

  let { id } = useParams();

  if (id.length > 3) {
    dogsId = dogsList.filter((e) => e.id === id);
  } else {
    dogsId = dogsList.filter((e) => e.id === parseInt(id));
  }

  useEffect(() => {
    dispatch(getDogsList());
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="navbarPerro">
        <Navbar />
      </div>
      <div className="infoPerro">
        <div className="imgPerro">
          <img src={dogsId[0].img} alt="Poster" />
        </div>
        <div className="info">
          <h1>{dogsId[0].name}</h1>
          <p>
            <label>Temperament: </label>
            {dogsId[0].tempers}
          </p>
          <p>
            <label>Height: </label>
            {dogsId[0].height} In
          </p>
          <p>
            <label>Weight: </label>
            {dogsId[0].weight} lb
          </p>
          <p>
            <label>Lifespan: </label>
            {dogsId[0].years_of_life}
          </p>
        </div>
      </div>
    </div>
  );
}
