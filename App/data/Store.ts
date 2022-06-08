import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { mockApi } from './services/Api';

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApi.middleware),
});

setupListeners(store.dispatch);

//async storage