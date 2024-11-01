import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa o localStorage como padrão
import authReducer from '../features/auth/authSlice';
import provisionReducer from '../features/provision/provisionSlice'
import rootSaga from './rootSagas';

// Cria o middleware do Saga
const sagaMiddleware = createSagaMiddleware();

// Configuração do persist
const persistConfig = {
  key: 'root',
  storage,
};

// Combina os reducers e aplica o persist no reducer
const rootReducer = combineReducers({
  auth: authReducer,
  provision: provisionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configura o store com o reducer persistido e os middlewares
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(sagaMiddleware),
});

// Roda o saga
sagaMiddleware.run(rootSaga);

// Cria o persistor
export const persistor = persistStore(store);
export default store;
