import { GET_DOGS, GET_DOGS_LIST, GET_DOG_DETAIL } from "../actions";

const initialState = {
  dogsList: [],
  dogsFilter: [],
  dogDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogsFilter: action.payload,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };
    case GET_DOGS_LIST:
      return {
        ...state,
        dogsList: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
