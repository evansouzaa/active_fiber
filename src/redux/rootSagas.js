import { all } from 'redux-saga/effects';
import { watchAuthSaga } from '../features/auth/authSaga';
import { watchprovisionSaga } from '../features/provision/provisionSaga';

export default function* rootSaga() {
  yield all([
    watchAuthSaga(),
    watchprovisionSaga(),
  ]);
}
