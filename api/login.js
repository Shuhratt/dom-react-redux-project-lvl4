import axios from "axios";
import { prefix } from "../src/routes.js";

export const loginFetcher = ({ email, password }) => {
  return axios
    .post(`${prefix}/login`, {
      username: email,
      password,
    })
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
