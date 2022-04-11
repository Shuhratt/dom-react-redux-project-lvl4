import { io } from "socket.io-client";
import { getMessage } from "../slices/messageSlices.js";
const socket = io();
import store from "../store/index.js";

socket.on("newMessage", (messageRes) => {
  store.dispatch(getMessage([messageRes]));
});

socket.on("connect", () => {
  console.log(socket.connected); // true
});

export default socket;
