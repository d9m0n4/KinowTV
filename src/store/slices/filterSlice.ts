import { IFilmFilters } from './../../services/moviesAPI';
import { createSlice } from '@reduxjs/toolkit';
import { FilmGenres, FilmOrder } from '../../constants/film';

interface FiltersState extends IFilmFilters {}

const initialState: FiltersState = {
  genres: FilmGenres.cartoon,
  order: FilmOrder.YEAR,
  yearFrom: 2000,
  yearTo: 2000,
  page: 1,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCountry(state, action) {
      state.countries = action.payload;
    },
  },
});

export const { setCountry } = filterSlice.actions;
