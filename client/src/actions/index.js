export const GET_DOGS_NAME = "GET_DOGS_NAME";
export const GET_DOG_DETAIL = "GET_DOG_DEAIL";
export const GET_DOGS_LIST = "GET_DOGS_LIST";
export const GET_ORDER_NAME = "GET_ORDER_NAME";
export const GET_ORDER_WEIGHT = "GET_ORDER_WEIGHT";
export const GET_FILTER_BREED = "GET_FILTER_BREED";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_TEMP = "FILTER_TEMP";

const axios = require("axios");

export const getDogsName = (name) => async (dispatch) => {
  const dogs = await axios.get(`http://localhost:3001/dogs?name=${name}`);
  dispatch({ type: GET_DOGS_NAME, payload: dogs.data });
};

export const getDogDetail = (id) => async (dispatch) => {
  const dogs = await axios.get(`http://localhost:3001/dogs/${id}`);
  dispatch({ type: GET_DOG_DETAIL, payload: dogs.data });
};

export function postDog(name, height, weight, year) {
  return function () {
    return axios.post("http://localhost:3001/dogs", {
      name: name[0].toUpperCase() + name.substring(1),
      height,
      weight,
      years_of_life: year,
    });
  };
}

export function getDogsList() {
  //Este trae todos los perros
  return async function (dispatch) {
    const dogsList = await axios.get("http://localhost:3001/dogs");
    dispatch({ type: GET_DOGS_LIST, payload: dogsList.data });
  };
}

export function getOrderName(value) {
  return { type: GET_ORDER_NAME, payload: value };
}

export function getOrderWeight(value) {
  return { type: GET_ORDER_WEIGHT, payload: value };
}

export function getFilterBreed(temper) {
  return { type: GET_FILTER_BREED, payload: temper };
}

export function getTemperaments() {
  return async function (dispatch) {
    const dogTemper = await axios.get("http://localhost:3001/temperaments");
    dispatch({ type: GET_TEMPERAMENTS, payload: dogTemper.data });
  };
}

export function filerTemp(value) {
  return { type: FILTER_TEMP, payload: value };
}
