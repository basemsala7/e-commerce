/* eslint-disable eqeqeq */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  data: [],
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (element, ThunkApi) => {
    const { rejectedWithValue } = ThunkApi;
    try {
      const response = await fetch("http://localhost:3003/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(element),
      });
      return response.json();
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deletitem: (state, action) => {
      console.log(state.data);
      state.data = state.data.filter((ele) => ele.id != action.payload);
      console.log(state.data);
    },
  },
  extraReducers: {
    [addToCart.pending]: (state, action) => {},
    [addToCart.fulfilled]: (state, action) => {
      state.success = true;
      console.log(action.payload);
      state.data.push(action.payload);
    },
    [addToCart.rejected]: (state) => {
      console.log("error");
    },
  },
});
export default cartSlice.reducer;
export const { deletitem } = cartSlice.actions;
