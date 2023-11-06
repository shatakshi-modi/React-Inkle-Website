import axios from "axios";

const API_CONSTANT = `https://demo5610319.mockable.io/email`;

export const getData = () => {
  return axios
    .get(API_CONSTANT)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
