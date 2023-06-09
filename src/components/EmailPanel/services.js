import axios from "axios";

const API_CONSTANT = `https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123`;

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
