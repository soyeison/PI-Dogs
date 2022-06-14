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
      <Navbar />
      {<img className="col-imgPerro" src={dogsId[0].img} alt="Poster" />}
      <div className="col-info">
        <h1>{dogsId[0].name}</h1>
        <p>Temperament: {dogsId[0].tempers}</p>
        <p>Height: {dogsId[0].height} In</p>
        <p>Weight: {dogsId[0].weight} lb</p>
        <p>year_of_life: {dogsId[0].years_of_life} years</p>
      </div>
    </div>
  );
}
