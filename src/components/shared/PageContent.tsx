import React from 'react';
import { FilteredFilms } from '../../models/film';
import FilmSlide from './FilmSlide';

//grid grid-flow-row  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-none text-secondaryText

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

// {
//   position: relative;
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//     display: flex;
//     transition-property: transform;
//     box-sizing: content-box;
// }
