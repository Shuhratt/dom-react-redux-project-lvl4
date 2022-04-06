import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: {},
  currentChannelId: null,
};

const channelsData = createSlice({
  initialState,
  name: "channels",
  reducers: {
    getChannels: (state, action) => {
      state.channels = action.payload;
    },
  },
});

export const { getChannels } = channelsData.actions;

export default channelsData.reducer;
