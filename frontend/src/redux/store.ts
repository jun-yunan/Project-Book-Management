import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { setupListeners } from '@reduxjs/toolkit/query';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { bookApi } from './services/bookApi';
import authReducer from './features/authSlice';
import { authApi } from './services/authApi';
import { profileApi } from './services/profileApi';
import navbarReducer from './features/navbarSlice';
import profileReducer from './features/profileSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: storageSession,
};

const rootReducer = combineReducers({
    [bookApi.reducerPath]: bookApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    auth: authReducer,
    navbar: navbarReducer,
    profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(bookApi.middleware, authApi.middleware, profileApi.middleware),
});

export let persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
