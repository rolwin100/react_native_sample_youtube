/* eslint-disable no-constant-condition */

import { put, call, takeEvery } from 'redux-saga/effects';
import api from '../../../utils/api';
import {
  GET_VIDEOS, getVideosFullfilled, getVideosRejected,
} from '../action';
import { apiUrl } from '../../../constants/apiContants'
/** 
 * worker saga
 */
const { get } = api;

export function* getVideosWorker() {
  try {
    const response = yield call(get, apiUrl);
    // console.log(response);
    yield put(getVideosFullfilled(response.data));
  } catch (e) {
    yield put(getVideosRejected(e));
  }
}


/**
 * watcher saga
 */
export default function* getUserWatcher() {
  yield takeEvery(GET_VIDEOS, getVideosWorker);
}
