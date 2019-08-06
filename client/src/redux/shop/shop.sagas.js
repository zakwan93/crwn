import { takeEvery, call, put, all } from "redux-saga/effects";
import shopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.action";

export function* fetchCollectionsAsync() {
  yield console.log("I'm fired");

  try {
    const collectionRef = firestore.collection("collection");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
