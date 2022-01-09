import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  content: "",
  place: "",
  time: "",
  bg: "",
};

const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm(state, { payload }) {
      const { prop, value } = { ...payload };
      state[prop] = value;
    },
    setBg(state, { payload }) {
      state.bg = payload;
    },
  },
});

export const { actions } = form;

export default form.reducer;
