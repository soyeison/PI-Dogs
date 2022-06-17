export const GET_DOGS_NAME = "GET_DOGS_NAME";
export const GET_DOG_DETAIL = "GET_DOG_DEAIL";
export const GET_DOGS_LIST = "GET_DOGS_LIST";
export const GET_ORDER_NAME = "GET_ORDER_NAME";
export const GET_ORDER_WEIGHT = "GET_ORDER_WEIGHT";
export const GET_FILTER_BREED = "GET_FILTER_BREED";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_TEMP = "FILTER_TEMP";
export const GET_ONLY_DB = "GET_ONLY_DB";

const axios = require("axios");

export const getDogsName = (name) => async (dispatch) => {
  const dogs = await axios.get(`/dogs?name=${name}`);
  dispatch({ type: GET_DOGS_NAME, payload: dogs.data });
};

export const getDogDetail = (id) => async (dispatch) => {
  const dogs = await axios.get(`/dogs/${id}`);
  dispatch({ type: GET_DOG_DETAIL, payload: dogs.data });
};

export function postDog(name, height, weight, year, img, temperament) {
  return async function () {
    if (img === "") {
      img =
        "https://cdn.pixabay.com/photo/2017/09/04/20/47/child-2715429_1280.jpg";
    }
    return await axios.post("/dogs", {
      name: name[0].toUpperCase() + name.substring(1),
      height,
      weight,
      years_of_life: year,
      img,
      temperament,
    });
  };
}

export function getDogsList() {
  //Este trae todos los perros
  return async function (dispatch) {
    const dogsList = await axios.get("/dogs");
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
    const dogTemper = await axios.get("/temperaments");
    dispatch({ type: GET_TEMPERAMENTS, payload: dogTemper.data });
  };
}

export function filterTemp(value) {
  return { type: FILTER_TEMP, payload: value };
}

export function getOnlyDb() {
  return { type: GET_ONLY_DB };
}
