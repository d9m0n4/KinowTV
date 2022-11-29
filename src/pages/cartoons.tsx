import { skipToken } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { Link } from 'react-router-dom';
import FilmSlide from '../components/shared/FilmSlide';
import { FilmGenres, FilmOrder } from '../constants/film';
import { FilteredFilm } from '../models/film';
import { useGetFilmImagesQuery, useGetFilmsByFiltersQuery } from '../services/moviesAPI';

const Cartoons = () => {
  const [page, setPage] = React.useState(1);
  const getRandomFilm = (filmsLenght: number) => {
    return Math.floor(Math.random() * filmsLenght);
  };
  const { data, error, isLoading } = useGetFilmsByFiltersQuery({
    genres: FilmGenres.cartoon,
    order: FilmOrder.RATING,
    yearFrom: 2000,
    yearTo: 2022,
    page: page,
  });

  const {} = useGetFilmImagesQuery(getRandomFilm(data?.items.length?.toString() ?? skipToken));

  return (
    <>
      {data && (
        <>
          <section className="h-[calc(100vh_-_88px)]">
            <img src={} alt="" />
          </section>
          <section>
            <div className="container mx-auto">
              <div className="grid grid-flow-row grid-cols-6 grid-rows-none text-secondaryText">
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
                  <button onClick={() => setPage((p) => p + 1)}>next page</button>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Cartoons;
