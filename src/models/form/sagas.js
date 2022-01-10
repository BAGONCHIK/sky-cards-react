import { takeEvery, all, call } from "redux-saga/effects";

import { actions } from "./index";

import { createCardApi } from "../../api/createForm";

function* createCard({ payload }) {
  try {
    const response = yield call(createCardApi(payload));
    console.info(response);
  } catch (err) {
    yield console.error(err);
  }
}

export default function* () {
  yield all([takeEvery(actions.showResult.type, createCard)]);
}
