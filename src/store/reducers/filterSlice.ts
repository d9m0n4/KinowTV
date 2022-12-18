import { IFilmFilters } from './../../services/moviesAPI';
import {ActionCreatorWithoutPayload, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { FilmGenres, FilmOrder } from '../../constants/film';

interface FiltersState extends IFilmFilters {}

const initialState: FiltersState = {
  genres: FilmGenres.cartoon,
  order: FilmOrder.YEAR,
  yearFrom: 2022,
  yearTo: 2022,
  page: 1,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCountry(state, action) {
      state.countries = action.payload;
    },
    setYear(state, action) {
      state.yearFrom = action.payload
      state.yearTo = action.payload
    },
    setRating(state, action) {
      state.ratingFrom = action.payload
      state.ratingTo = action.payload
    },
    setOrder(state, action) {
      state.order = action.payload
    },
    setPage(state, action) {
      state.page = action.payload
    },
    reset: () => initialState

  },
});

export const { setCountry, setYear, setRating, setOrder, setPage, reset } = filterSlice.actions;
