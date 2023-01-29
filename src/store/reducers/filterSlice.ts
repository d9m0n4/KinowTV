import { createSlice } from '@reduxjs/toolkit';

import { IFilmFilters } from '../../services/moviesAPI';

interface FiltersState extends IFilmFilters {}

const initialState: FiltersState = {
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
			state.yearFrom = action.payload;
			state.yearTo = action.payload;
		},
		setRating(state, action) {
			state.ratingFrom = action.payload;
			state.ratingTo = action.payload;
		},
		setOrder(state, action) {
			state.order = action.payload;
		},
		setPage(state, action) {
			state.page = action.payload;
		},
		reset: () => initialState,
	},
});

export const { setCountry, setYear, setRating, setOrder, setPage, reset } =
	filterSlice.actions;
