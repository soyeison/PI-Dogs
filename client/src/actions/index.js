export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DEAIL";

const axios = require("axios");

export const getDogs = (name) => async (dispatch) => {
  //console.log("Entra a axios de getDogs");
  const dogs = await axios
    .get(`http://localhost:3001/dogs?name=${name}`)
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: GET_DOGS, payload: data });
    });
  return dogs;
};

export const getDogDetail = (id) => async (dispatch) => {
  const dog_detail = await axios
    .get(`https://localhost:3001/dogs/${id}`)
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: GET_DOG_DETAIL, payload: data });
    });
  return dog_detail;
};
