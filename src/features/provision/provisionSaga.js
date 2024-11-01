import { takeLatest } from 'redux-saga/effects';
import { provisionRequest } from './provisionSlice';

function* discoveryOnt(action) {
  try {

    yield console.log("ont descoberta")

  } catch (error) {

    yield console.log('falha ont')

  }
}

export function* watchprovisionSaga() {
  yield takeLatest(provisionRequest.type, discoveryOnt);
}
