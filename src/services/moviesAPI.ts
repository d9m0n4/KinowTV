import { IBudget } from './../models/filmBudget';
import { IPersonInfo } from './../models/persone';
import { ISimilars } from './../models/similars';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilteredFilms, IFilm, TOPFilms } from '../models/film';
import { IStaff } from '../models/staff';
import { ISeasons } from '../models/serailSeasons';
import { FilmOrder, FilmTOP, FilmType } from '../constants/film';

export interface IFilmFilters {
  countries?: number | null;
  genres?: number;
  order?: FilmOrder;
  type?: FilmType;
  ratingFrom?: number;
  ratingTo?: number;
  yearFrom?: number;
  yearTo?: number;
  imdbId?: number;
  keyword?: string;
  page?: number;
}

export const MoviesAPI = createApi({
  reducerPath: 'MoviesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('X-API-KEY', '27e448ff-ebf1-469e-abdd-5eca1f02911f');
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Content-Type', 'text/html');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilmById: builder.query<IFilm, string>({
      query: (id) => `/v2.2/films/${id}`,
    }),
    getSimilarsById: builder.query<ISimilars | null, string>({
      query: (id) => `/v2.2/films/${id}/similars`,
      transformResponse: (response: ISimilars) => {
        return response.items.length > 0 ? response : null;
      },
    }),
    getFilmsByFilters: builder.query<FilteredFilms, IFilmFilters>({
      query: ({
        page,
        order,
        type,
        ratingFrom,
        ratingTo,
        yearFrom,
        yearTo,
        countries,
        genres,
      }) => ({
        url: `/v2.2/films`,
        params: {
          countries: countries && countries,
          genres,
          order,
          type,
          ratingFrom,
          ratingTo,
          yearFrom,
          yearTo,
          page,
        },
      }),

      transformResponse: (response: FilteredFilms) => {
        return { ...response, items: response.items.filter((item) => item.nameRu !== null) };
      },
    }),
    getFilmBudget: builder.query<IBudget, string>({
      query: (id) => `/v2.2/films/${id}/box_office`,
    }),
    getPremiers: builder.query({
      query: ({ year, month }) => `/v2.2/films/premieres?year=${year}&month=${month}`,
    }),
    getTop: builder.query<TOPFilms, { type: FilmTOP; page: number }>({
      query: ({ type, page }) => `/v2.2/films/top?type=${type}&page=${page}`,
    }),
    getVideos: builder.query({
      query: ({ id }) => `v2.2/films/${id}/videos`,
    }),
    getImages: builder.query({
      query: ({ id, page, images }) => ({
        url: `v2.2/films/${id}/images`,
        params: {
          images,
          page,
        },
      }),
    }),

    getStaffByFilmId: builder.query<IStaff[], string>({
      query: (id) => `/v1/staff/?filmId=${id}`,
      transformResponse: (response: IStaff[]) => {
        const filteredPersons = response.filter(
          (item) => item.professionKey === 'ACTOR' && item.nameRu !== '',
        );
        return filteredPersons.slice(0, 10);
      },
    }),
    getStaffByPersonId: builder.query<IPersonInfo, string>({
      query: (id) => `/v1/staff/${id}`,
      transformResponse: (response: IPersonInfo) => {
        const filmsData = response.films.slice(0, 10);
        return { ...response, films: filmsData };
        // let o = response.films.map((film) => [film['filmId'], film]);
        // let u = [...new Map<any, any>(o).values()];
        // return u;
      },
    }),

    getSerialSeasons: builder.query<ISeasons, string>({
      query: (id) => `v2.2/films/${id}/seasons`,
    }),
    getFilmImages: builder.query({
      query: (id) => `v2.2/films/${id}/images`,
      providesTags: (result) => (result.total > 0 ? [result] : ['No_Data']),
    }),
  }),
});

export const {
  useGetPremiersQuery,
  useGetTopQuery,
  useGetVideosQuery,
  useGetFilmByIdQuery,
  useGetSimilarsByIdQuery,
  useGetStaffByFilmIdQuery,
  useGetFilmBudgetQuery,
  useGetStaffByPersonIdQuery,
  useGetFilmsByFiltersQuery,
  useGetSerialSeasonsQuery,
  useGetFilmImagesQuery,
} = MoviesAPI;
