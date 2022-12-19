import React from 'react';
import Loader from '../components/shared/Loader';
import { PageContent } from '../components/shared/PageContent';
import { PageFilters } from '../components/shared/PageFilters';
import { Pagination } from '../components/shared/Pagination';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useGetFilmsByFiltersQuery } from '../services/moviesAPI';

export const Cartoons = () => {
  const filters = useTypedSelector((state) => state.filters);
  const { data, isFetching, isLoading } = useGetFilmsByFiltersQuery(filters);

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
            <Pagination />
          </div>
        </section>
      )}
    </>
  );
};
