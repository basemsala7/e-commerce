import { createSlice } from "@reduxjs/toolkit";

const intialCount = { value: 0 };

const countSlice = createSlice({
  name: "count",
  initialState: intialCount,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
