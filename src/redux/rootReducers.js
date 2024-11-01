import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import provisionReducer from '../features/provision/provisionSlice'
// Importe outros reducers conforme necessário

const rootReducer = combineReducers({
    auth: authReducer,
    provision: provisionReducer,
    // Adicione outros reducers aqui
});

export default rootReducer;
