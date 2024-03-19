import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import orderReducer from './orders';
import {authApi} from '@services/auth';

// import { authApi } from './auth/api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: orderReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
