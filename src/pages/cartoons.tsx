import React from 'react';
import { Link } from 'react-router-dom';
import FilmSlide from '../components/shared/FilmSlide';
import { FilmGenres, FilmOrder } from '../constants/film';
import { useGetFilmsByFiltersQuery } from '../services/moviesAPI';

const Cartoons = () => {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading } = useGetFilmsByFiltersQuery({
    genres: FilmGenres.cartoon,
    order: FilmOrder.RATING,
    yearFrom: 2000,
    yearTo: 2022,
    page: page,
  });

  React.useEffect(() => {
    if (data) {
      console.log(Array.from({ length: data?.total }));
    }
  }, [data]);
  return (
    <>
      {data && (
        <section className="h-[calc(100vh_-_88px)]">
          <div className="container mx-auto">
            <div className="grid grid-flow-row grid-cols-6 grid-rows-none text-secondaryText">
              {data?.items.map((film) => (
                <Link key={film.kinopoiskId} to={`/film/${film.kinopoiskId}`} className=" p-4 ">
                  <div className="relative ">
                    <img src={film.posterUrlPreview} alt="1" className="rounded-md " />
                    <div className="absolute  inset-0  opacity-0 hover:opacity-100 transition-all">
                      {film.ratingImdb && (
                        <div className="inline-block py-2 px-4 bg-accentPurple rounded-lg">
                          <div>{film.ratingImdb}</div>
                        </div>
                      )}
                      {film.countries && film.countries?.length > 0 && (
                        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between py-2 px-4 text-sm font-normal bg-accentWrapper">
                          <span>{film.year}</span>
                          <span>{film.countries[0].country}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {film.nameRu && (
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                      <span className="text-sm mt-2 font-normal"> {film.nameRu}</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
            <div className="flex">
              {page !== data.totalPages && (
                <button onClick={() => setPage((p) => p + 1)}>next page</button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cartoons;
