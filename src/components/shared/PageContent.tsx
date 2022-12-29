import React from 'react';
import { FilteredFilms } from '../../models/film';
import FilmSlide from './FilmSlide';

export const PageContent = ({ data }: { data: FilteredFilms }) => {
  return (
    <div className="flex flex-wrap text-lightGray">
      {data?.items.map((film) => (
        <div key={film.kinopoiskId} className="p-2 max-w-[16.6%] w-full h-full">
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
