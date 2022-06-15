import {
  GET_DOGS_NAME,
  GET_DOGS_LIST,
  GET_DOG_DETAIL,
  GET_ORDER_NAME,
  GET_ORDER_WEIGHT,
  GET_TEMPERAMENTS,
  FILTER_TEMP,
} from "../actions";

const initialState = {
  dogsTemper: [],
  dogsOrder: [],
  dogsList: [],
  dogsFilter: [],
  dogDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS_NAME:
      return {
        ...state,
        dogsOrder: action.payload,
        dogsList: action.payload,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };
    case GET_DOGS_LIST: //Este trae todos los perros
      return {
        ...state,
        dogsOrder: action.payload,
        dogsList: action.payload,
      };
    case GET_ORDER_NAME:
      let orderListAlphabet =
        action.payload === "ascendente"
          ? state.dogsOrder.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              else return 0;
            })
          : state.dogsOrder.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              else return 0;
            });
      return {
        ...state,
        dogsList: orderListAlphabet,
      };
    case GET_ORDER_WEIGHT:
      let orderListWeight =
        action.payload === "asc"
          ? state.dogsOrder.sort(function (a, b) {
              if (
                parseInt(a.weight.slice(0, 2)) > parseInt(b.weight.slice(0, 2))
              )
                return 1;
              if (
                parseInt(a.weight.slice(0, 2)) < parseInt(b.weight.slice(0, 2))
              )
                return -1;
              else return 0;
            })
          : state.dogsOrder.sort(function (a, b) {
              if (
                parseInt(a.weight.slice(0, 2)) > parseInt(b.weight.slice(0, 2))
              )
                return -1;
              if (
                parseInt(a.weight.slice(0, 2)) < parseInt(b.weight.slice(0, 2))
              )
                return 1;
              else return 0;
            });
      return {
        ...state,
        dogsList: orderListWeight,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        dogsTemper: action.payload,
      };
    case FILTER_TEMP:
      let dogsFilterTemp = state.dogsOrder.filter((e) =>
        e.tempers.includes(action.payload)
      );
      return {
        ...state,
        dogsList: dogsFilterTemp,
      };
    default:
      return state;
  }
};

export default rootReducer;
