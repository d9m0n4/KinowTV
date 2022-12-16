import React from 'react';
import { FilteredFilms } from '../../models/film';
import FilmSlide from './FilmSlide';

export const PageContent = ({ data }: { data: FilteredFilms }) => {
  return (
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
  );
};
