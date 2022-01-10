import { createSelector } from "reselect";

const rootSelector = (state) => state.form;

export const bgSelector = createSelector(
  rootSelector,
  (state) => state.form.bg_number
);

export const contentSelector = createSelector(
  rootSelector,
  (state) => state.form.content
);

export const placeSelector = createSelector(
  rootSelector,
  (state) => state.form.place
);

export const timeSelector = createSelector(
  rootSelector,
  (state) => state.form.time
);

export const dateSelector = createSelector(
  rootSelector,
  (state) => state.form.date
);

export const skySelector = createSelector(rootSelector, (state) => state.sky);

export const formDataSelector = createSelector(
  rootSelector,
  (state) => state.form
);
