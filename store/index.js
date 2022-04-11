/*
Инициализируем хранилище с помощью функции configureStore(), которая, в отличии от такой же функции в Redux,
умеет комбинировать редьюсеры самостоятельно.
Функция принимает на вход объект с ключом reducer, значением которого является объект с редьюсерами.

Сами редьюсеры находятся в директории slices.
Toolkit вводит новое понятие слайс (срез), которое объединяет в себе Reducers, Actions и многое другое.
 */

import { configureStore } from "@reduxjs/toolkit";
import messages from "../slices/messageSlices.js";
import channels from "../slices/channelsSlices.js";

export default configureStore({
  reducer: {
    messagesInfo: messages,
    channelsInfo: channels,
  },
});
