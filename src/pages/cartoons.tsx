import React from 'react';
import FilmSlide from '../components/shared/FilmSlide';
import { FilterButton } from '../components/shared/FilterButton';
import Loader from '../components/shared/Loader';
import { PageContent } from '../components/shared/PageContent';
import { PageFilters } from '../components/shared/PageFilters';
import { countries, FilmGenres, FilmOrder, years } from '../constants/film';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IFilmFilters, useGetFilmsByFiltersQuery } from '../services/moviesAPI';
import {useActions} from "../hooks/useActions";

export const Cartoons = () => {
  const filters = useTypedSelector((state) => state.filters);
  const { data, isFetching, isLoading } = useGetFilmsByFiltersQuery(filters);
  const {setPage} = useActions()
  const page = useTypedSelector((state) => state.filters.page)

  return (
    <>
      <Loader in={isFetching || isLoading} />
      {data && (
        <section>
          <div className="container mx-auto">
            <div className="pt-8">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-lightGray">Мультфильмы</h1>
              </div>
              <PageFilters />
            </div>
            <PageContent data={data} />
            <div className="flex">
               {page && page < data.totalPages  &&
                <button
                  onClick={() => setPage(page + 1)}>
                  next page
                </button>
              }
            </div>
          </div>
        </section>
      )}
    </>
  );
};
