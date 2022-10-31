import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetFilmByIdQuery } from '../services/moviesAPI';

const Film = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetFilmByIdQuery({ id });

  console.log(data);
  console.log(error);

  if (error) {
    return <div>Фильм не найден</div>;
  }

  return (
    <section>
      {data && (
        <div className="relative">
          <img className="block object-cover" src={data.coverUrl} alt="" />
          <div className="absolute top-0 left-0 bottom-0 w-full gradient flex" />
          <div className="container mx-auto absolute inset-0 flex items-center">
            <div className="w-1/3 text-secondaryText">
              <h1 className="text-8xl">{data.nameRu}</h1>
              <div className="flex">
                <span className="">{data.ratingImdb}</span>
                <span>{data.year}</span>
                <span>{data.genres[0].genre}</span>
                <span>{data.filmLength}</span>
                <span>{data.ratingAgeLimits}</span>
              </div>
              <div>
                <p>{data.shortDescription}</p>
              </div>
              <div>
                <p>
                  Отзывы: <span>{data.reviewsCount}</span>
                </p>
              </div>
              <div className="flex">
                <button>смотреть</button>
                <i>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V19L8 15.5L1 19V3Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Film;
