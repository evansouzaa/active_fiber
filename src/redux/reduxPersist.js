import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
    const persistedReducers = persistReducer(
        {
            key: "FIBER-ACTIVE",
            storage,
            whitelist: ["auth", "provision"]
        },
        reducers
    );

    return persistedReducers;
}