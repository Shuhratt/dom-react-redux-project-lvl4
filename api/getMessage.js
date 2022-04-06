import API from "./apiConfing.js";
import axios from "axios";

export const getMessageFetcher = (token) => {
  return axios
    .get(`${API.base}/data`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => console.log(e));
};
