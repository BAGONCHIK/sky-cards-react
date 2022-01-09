import { takeEvery, all } from "redux-saga/effects";

import { actions } from "./index";

import * as api from "api/family";
import { request } from "utils/call";

function* getCurrentFamily() {
  try {
  } catch (err) {
    yield console.error(err);
    yield pushError("Something went wrong");
  }
}

export default function* () {
  yield all([takeEvery(actions.getCurrentFamily.type, getCurrentFamily)]);
}
