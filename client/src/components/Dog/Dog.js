import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from "../../actions/index.js";

export default function Dog(props) {
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogDetail);

  const dogId = props.match.params.id;

  useEffect(() => {
    dispatch(getDogDetail(dogId));
  });
  return (
    <div>
      {console.log(dogDetail)}
      <h1>Detalle del perro</h1>
    </div>
  );
}
