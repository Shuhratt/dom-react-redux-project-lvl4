import axios from "axios";
import API from "./apiConfing.js";

export const loginFetcher = ({ email, password }) => {
  return axios
    .post(`${API.base}/login`, {
      username: email,
      password,
    })
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
