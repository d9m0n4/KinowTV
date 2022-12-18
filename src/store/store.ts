import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { MoviesAPI } from '../services/moviesAPI';
import { filterSlice } from './reducers/filterSlice';

const rootReducer = combineReducers({
  [MoviesAPI.reducerPath]: MoviesAPI.reducer,
  filters: filterSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(MoviesAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
