import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export function* incrementAsync() {
  const incAsync = yield call(delay, 1000);
  yield put({ type: 'INCREMENT_ASYNC_SUCCESS', incAsync });
}
