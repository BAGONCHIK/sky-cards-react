import { takeEvery, all, call, put } from "redux-saga/effects";

import { actions } from "./index";

import { createCardApi } from "../../api/createForm";

function* createCard({ payload }) {
  try {
    const response = yield call(createCardApi, payload);
    yield put(actions.setSky(response.card_url));
    yield put(actions.setForm({ prop: "date", value: response.date }));
    yield put(actions.setForm({ prop: "text", value: response.text }));
    yield put(actions.setForm({ prop: "place", value: response.place }));
    yield put(actions.setForm({ prop: "time", value: response.time }));
  } catch (err) {
    yield console.error(err);
  }
}

export default function* () {
  yield all([takeEvery(actions.showResult.type, createCard)]);
}
