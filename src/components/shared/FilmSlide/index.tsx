import React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../../../models/film';

const FilmSlide = ({
  filmId,
  filmImg,
  countries,
  filmName,
  rating,
  year,
}: {
  filmId: number;
  filmImg: string;
  rating?: number;
  year?: string | number;
  countries?: Country[];
  filmName?: string;
}) => {
  return (
    <>
      <Link to={`/film/${filmId}`}>
        <div className="relative pt-[150%] hover:-translate-y-2 transition-transform">
          <img src={filmImg} alt="1" className="rounded-md object-cover w-full h-full absolute inset-0" />
          <div className="absolute  inset-0  opacity-0 hover:opacity-100 transition-all">
            {rating && (
              <div className="inline-block py-2 px-4 bg-accentPurple rounded-lg">
                <div>{rating}</div>
              </div>
            )}
            {countries && countries?.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between py-2 px-4 text-sm font-normal bg-accentWrapper">
                <span>{year}</span>
                <span>{countries[0].country}</span>
              </div>
            )}
          </div>
        </div>
        {filmName && (
          <div className="text-ellipsis overflow-hidden whitespace-nowrap">
            <span className="text-sm mt-2 font-normal"> {filmName}</span>
          </div>
        )}
      </Link>
    </>
  );
};

export default FilmSlide;
