import React from 'react';
import FilmSlide from '../components/shared/FilmSlide';
import { FilterButton } from '../components/shared/FilterButton';
import { countries, FilmGenres, FilmOrder } from '../constants/film';
import { IFilmFilters, useGetFilmsByFiltersQuery } from '../services/moviesAPI';

export const Cartoons = () => {
  const [page, setPage] = React.useState<number>(1);
  const [filters, setFilters] = React.useState<IFilmFilters>({
    genres: FilmGenres.cartoon,
    order: FilmOrder.RATING,
    yearFrom: 2000,
    yearTo: new Date().getUTCFullYear(),
    page: page,
    countries: null,
  });

  const { data } = useGetFilmsByFiltersQuery(filters);

  return (
    <>
      {data && (
        <section>
          <div className="container mx-auto">
            <div className="pt-8">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-lightGray">Мультфильмы</h1>
              </div>
              <div className="flex justify-between mb-8">
                <div className="flex ">
                  <FilterButton title="Страна" data={countries} />
                  <FilterButton title="Годы" />
                  <FilterButton title="Рейтинг" />
                </div>
                <div>
                  <FilterButton title="По рейтингу" />
                </div>
              </div>
            </div>
            <div className="grid grid-flow-row  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-none text-secondaryText">
              {data?.items.map((film) => (
                <div
                  key={film.kinopoiskId}
                  className="p-2 h-auto flex flex-col shrink-0 w-full relative transition-transform">
                  <FilmSlide
                    filmId={film.kinopoiskId}
                    filmImg={film.posterUrlPreview}
                    filmName={film.nameRu}
                    year={film.year}
                    rating={film.ratingImdb}
                    countries={film.countries}
                  />
                </div>
              ))}
            </div>
            <div className="flex">
              {page !== data.totalPages && (
                <button onClick={() => setPage(page + 1)}>next page</button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
