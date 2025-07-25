import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counter/counterSlice';
import { ecommerceApi } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
    counter: counterReducer,
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerceApi.middleware),
})
setupListeners(store.dispatch)
