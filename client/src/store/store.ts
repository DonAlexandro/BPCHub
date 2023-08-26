import { configureStore } from '@reduxjs/toolkit';
import { articleAPI } from './api';

export const store = configureStore({
  reducer: {
    [articleAPI.reducerPath]: articleAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([articleAPI.middleware]),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
