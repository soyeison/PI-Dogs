export const GET_DOGS = "GET_DOGS";
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
