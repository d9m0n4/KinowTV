import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { MoviesAPI } from '../services/moviesAPI';
import { filterSlice } from './slices/filterSlice';

const store = configureStore({
  reducer: {
    [MoviesAPI.reducerPath]: MoviesAPI.reducer,
    filters: filterSlice.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(MoviesAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
