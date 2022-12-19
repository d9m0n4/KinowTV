import { useEffect, useState } from 'react';
import { MoviesAPI } from '../services/moviesAPI';
import store from '../store/store';
import { FilteredFilm, FilteredFilms } from '../models/film';

export const useInfiniteList = (page: number) => {
  const [data, setData] = useState<FilteredFilm[]>();

  useEffect(() => {
    Promise.all(
      [...new Array(page)]
        .map((_, i) => i + 1)
        .map((page) => store.dispatch(MoviesAPI.endpoints.getFilmsByFilters.initiate({ page }))),
    )
      .then((result) => result.flatMap(({ data }) => data?.items as unknown as FilteredFilm[]))
      .then((result) => setData(result));
  }, [page]);

  return {
    isLoading: !data,
    data,
  };
};
