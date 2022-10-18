import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const MoviesAPI = createApi({
  reducerPath: 'MoviesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('X-API-KEY', '27e448ff-ebf1-469e-abdd-5eca1f02911f');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPremiers: builder.query({
      query: ({ year, month }) => `/v2.2/films/premieres?year=${year}&month=${month}`,
    }),
    getTop: builder.query({
      query: ({ type, page }) => `/v2.2/films/top?type=${type}&page=${page}`,
    }),
    getVideos: builder.query({
      query: ({ id }) => `v2.2/films/${id}/videos`,
    }),
  }),
});

export const { useGetPremiersQuery, useGetTopQuery, useGetVideosQuery } = MoviesAPI;
