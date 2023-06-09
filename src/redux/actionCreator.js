import { GET_MAIL_DATA, SET_LOADING } from "./constant";

export const setMailData = (payload) => ({
  type: GET_MAIL_DATA,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
