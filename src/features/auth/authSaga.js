// src/store/sagas/authSagas.js

import { takeLatest, call, put } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure, logout } from './authSlice';
import { toast } from 'react-toastify';
import { router } from '../../routes/Router';
import api from '../../services/axios';

function* loginSaga(action) {
  try {
    const response = yield call(api.post, "/auth/login", action.payload);

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    toast.success("Logado com sucesso!");

    router.navigate("/dashboard");

    yield put(loginSuccess(token));

  } catch (error) {
    toast.warning("Usuário ou senha incorretos");

    console.log(error.response.data.error);

    yield put(loginFailure(error.response.data.error));
  }
}

function logoutSaga() {
  toast.success("Deslogado com sucesso!");

  put(logout());
}

export function* watchAuthSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(logout.type, logoutSaga);
}
