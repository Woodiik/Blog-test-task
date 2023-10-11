import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const axiosMiddlewareOptions = {
  interceptors: {
    request: [(_, req) => req],
  },
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(axiosMiddleware(axios, axiosMiddlewareOptions)),
});

export const persistor = persistStore(store);
