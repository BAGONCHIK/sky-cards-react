import { createSlice } from "@reduxjs/toolkit";
import { images } from "../../assets/images";

const initialState = {
  form: {
    name: "",
    email: "admin@example.com",
    content: "",
    place: "",
    time: "",
    date: "",
    bg_number: "1",
  },
  sky: `${images.DefaultSky}`,
};

const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm(state, { payload }) {
      const { prop, value } = { ...payload };
      state.form[prop] = value;
    },
    showResult: (state, { payload }) => state,
    setSky(state, { payload }) {
      state.sky = payload;
    },
    setBg(state, { payload }) {
      state.form.bg_number = payload;
    },
  },
});

export const { actions } = form;

export default form.reducer;
