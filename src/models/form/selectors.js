import { createSelector } from "reselect";

const rootSelector = (state) => state.form;

export const bgSelector = createSelector(rootSelector, (state) => state.bg);

export const contentSelector = createSelector(
  rootSelector,
  (state) => state.content
);

export const placeSelector = createSelector(
  rootSelector,
  (state) => state.place
);

export const timeSelector = createSelector(rootSelector, (state) => state.time);

export const dateSelector = createSelector(rootSelector, (state) => state.date);

export const skySelector = createSelector(rootSelector, (state) => state.sky);
