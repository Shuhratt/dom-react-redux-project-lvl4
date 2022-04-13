import axios from "axios";
import routes from "../src/routes.js";

export const getChannels = () => {
  return axios
    .get(routes.channelsPath())
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
