import { takeEvery } from 'redux-saga/effects';
import { incrementAsync } from './ui/views/PageRedux/saga';

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
