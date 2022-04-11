import { createSlice } from "@reduxjs/toolkit";

// Начальное значение
const initialState = {
  messages: [],
};

const messageData = createSlice({
  initialState,
  name: "messages",
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    getMessage: (state, action) => {
      state.messages = [...state.messages, ...action.payload];
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { getMessage } = messageData.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default messageData.reducer;
