import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
};

export const getShose = createAsyncThunk(
  "shose/getShose",
  async (_, ThunkApi) => {
    const { rejectedWithValue } = ThunkApi;
    try {
      const res = await fetch("http://localhost:3003/shose");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

const shoseSlice = createSlice({
  name: "shose",
  initialState,
  reducers: {},
  extraReducers: {
    [getShose.pending]: (state, action) => {
      console.log(state.loading);
    },
    [getShose.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      console.log(state.data)
    },
    [getShose.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default shoseSlice.reducer;
