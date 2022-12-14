import React from 'react';
import FilmSlide from '../components/shared/FilmSlide';
import { FilterButton } from '../components/shared/FilterButton';
import { countries, FilmGenres, FilmOrder, years } from '../constants/film';
import { IFilmFilters, useGetFilmsByFiltersQuery } from '../services/moviesAPI';

export const Cartoons = () => {
  const [filters, setFilters] = React.useState<IFilmFilters>({
    genres: FilmGenres.cartoon,
    order: FilmOrder.YEAR,
    yearFrom: 1900,
    yearTo: new Date().getUTCFullYear(),
    page: 1,
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
                  <FilterButton
                    title="Страна"
                    data={countries}
                    onChange={(c) =>
                      setFilters((filter) => ({ ...filter, countries: c as number }))
                    }
                  />
                  <FilterButton
                    title="Годы"
                    data={years}
                    onChange={(c) =>
                      setFilters((filter) => ({
                        ...filter,
                        yearFrom: Number(c.toString().split('-')[0]),
                        yearTo: Number(c.toString().split('-')[1]),
                      }))
                    }
                  />
                  <FilterButton title="Рейтинг" onChange={(e) => console.log(e)} />
                </div>
                <div>
                  <FilterButton title="По рейтингу" onChange={(e) => console.log(e)} />
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
              {
                <button
                  onClick={() => setFilters((filter) => ({ ...filter, page: filter.page! + 1 }))}>
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
