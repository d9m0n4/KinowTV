import React from 'react';
import Loader from '../components/shared/Loader';
import { PageContent } from '../components/shared/PageContent';
import { PageFilters } from '../components/shared/PageFilters';
import { Pagination } from '../components/shared/Pagination';
import { FilmType } from '../constants/film';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useGetFilmsByFiltersQuery } from '../services/moviesAPI';

export const NewFilms = () => {
  const filters = useTypedSelector((state) => state.filters);
  const { data, isFetching, isLoading } = useGetFilmsByFiltersQuery({
    ...filters,
    yearFrom: new Date().getFullYear(),
  });
  const page = useTypedSelector((state) => state.filters.page);
  const { setPage } = useActions();

  return (
    <>
      <Loader in={isFetching || isLoading} />
      {data && (
        <section>
          <div className="container mx-auto">
            <div className="pt-8">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-lightGray">Новинки</h1>
              </div>
            </div>
            <PageContent data={data} />
            <div className="my-4">
              <Pagination
                currentPage={page}
                totalPages={data.totalPages}
                onPageChange={(page) => setPage(page)}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
