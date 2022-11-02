import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IBudget, { IFilm } from '../models';

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
    getSimilarsById: builder.query({
      query: ({ id }) => `/v2.2/films/${id}/similars`,
    }),
    getFilmBudget: builder.query<IBudget.BudgetItems, string>({
      query: (id) => `/v2.2/films/${id}/box_office`,
    }),
    getPremiers: builder.query({
      query: ({ year, month }) => `/v2.2/films/premieres?year=${year}&month=${month}`,
    }),
    getTop: builder.query({
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

    getStaffByFilmId: builder.query({
      query: ({ id }) => `/v1/staff/?filmId=${id}`,
    }),
  }),
});

export const {
  useGetPremiersQuery,
  useGetTopQuery,
  useGetVideosQuery,
  useGetImagesQuery,
  useGetFilmByIdQuery,
  useGetSimilarsByIdQuery,
  useGetStaffByFilmIdQuery,
  useGetFilmBudgetQuery,
} = MoviesAPI;
