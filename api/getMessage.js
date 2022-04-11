import axios from "axios";
import { prefix } from "../src/routes.js";

export const getMessageFetcher = (token) => {
  return axios
    .get(`${prefix}/data`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => console.log(e));
};
