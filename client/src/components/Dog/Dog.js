import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from "../../actions/index.js";
import "./Dog.css";

export default function Dog(props) {
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogDetail);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      {<img className="col-imgPerro" src={dogDetail.img} alt="Poster" />}
      <div className="col-info">
        <h1>{dogDetail.name}</h1>
        <p>Temperament: {dogDetail.temperament}</p>
        <p>Height: {dogDetail.height} ft</p>
        <p>Weight: {dogDetail.weight} lb</p>
        <p>year_of_life: {dogDetail.year_of_life}</p>
      </div>
    </div>
  );
}
