export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DEAIL";
export const GET_DOGS_LIST = "GET_DOGS_LIST";

const axios = require("axios");

export const getDogs = (name) => async (dispatch) => {
  const dogs = await axios.get(`http://localhost:3001/dogs?name=${name}`);
  dispatch({ type: GET_DOGS, payload: dogs.data });
};

export const getDogDetail = (id) => async (dispatch) => {
  const dogs = await axios.get(`http://localhost:3001/dogs/${id}`);
  dispatch({ type: GET_DOG_DETAIL, payload: dogs.data });
};

export function postDog(name, height, weight, year) {
  return function (dispatch) {
    return axios.post("http://localhost:3001/dogs", {
      name,
      height,
      weight,
      years_of_life: year,
    });
  };
}

export function getDogsList() {
  return async function (dispatch) {
    const dogsList = await axios.get("http://localhost:3001/dogs");
    dispatch({ type: GET_DOGS_LIST, payload: dogsList.data });
  };
}
