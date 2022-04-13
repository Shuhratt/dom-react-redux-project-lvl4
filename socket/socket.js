import { io } from "socket.io-client";
import { getMessage } from "../slices/messageSlices.js";
const socket = io();
import store from "../store/index.js";

socket.on("connect", () => {
  console.log(socket.connected); // true
});

socket.on("disconnect", () => {
  socket.connect();
});

socket.on("newMessage", (messageRes) => {
  store.dispatch(getMessage([messageRes]));
});

socket.on("connect_error", function () {
  console.error("Извините, похоже, возникла проблема с подключением!");
});

export default socket;
