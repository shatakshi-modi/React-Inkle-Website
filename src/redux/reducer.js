import { GET_MAIL_DATA, SET_LOADING } from "./constant";

export const inkleMailRedux = (state = { loading: false }, action) => {
  switch (action.type) {
    case GET_MAIL_DATA:
      return {
        ...state,
        mail: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default inkleMailRedux;
