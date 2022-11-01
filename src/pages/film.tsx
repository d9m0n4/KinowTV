import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetFilmByIdQuery, useGetSimilarsByIdQuery } from '../services/moviesAPI';
import Button from '../components/ui/Button';
import Slider from '../components/ui/Slider/Slider';
import { SwiperSlide } from 'swiper/react';

const Film = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetFilmByIdQuery({ id });
  const { data: similars, error: e, isLoading: l } = useGetSimilarsByIdQuery({ id });

  const filmLength = (length: any) => {
    const h = Math.floor(length / 60) + 'ч';
    const m = Math.floor(length % 60) + 'мин';
    return `${h} ${m}`;
  };

  if (error) {
    return <div>Фильм не найден</div>;
  }

  return (
    <>
      {data && (
        <>
          <section className="h-[calc(100vh_-_88px)]">
            <div className="relative h-full">
              <img className="block object-cover h-full w-full" src={data.coverUrl} alt="" />
              <div className="absolute top-0 left-0 bottom-0 w-full gradient flex" />
              <div className="container mx-auto absolute inset-0  flex items-center">
                <div className="w-2/5 mx-4 text-secondaryText text-2xl">
                  <h1 className="text-7xl font-bold">{data.nameRu}</h1>
                  <div className="py-2 flex  mt-4 justify-between font-medium">
                    <span className="bg-gray rounded-md py-1 px-2  text-base block text-accentDark">
                      {data.ratingImdb.toFixed(1)}
                    </span>
                    <span>{data.year}</span>
                    <span>{data.genres[0].genre}</span>
                    <span>{filmLength(data.filmLength)}</span>
                    <span>{data.ratingAgeLimits}</span>
                  </div>
                  <div className="py-2 my-2">
                    <p>{data.shortDescription}</p>
                  </div>
                  <div className="py-2">
                    <p>
                      Отзывы: <span>{data.reviewsCount}</span>
                    </p>
                  </div>
                  <div className="flex justify-between py-2 mt-4">
                    <Button className="px-32 py-2 bg-accentPurple rounded-lg">Смотреть</Button>
                    <i className="px-4 py-3 bg-gray rounded-lg">
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V19L8 15.5L1 19V3Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-8 py-2">
            <div className="container mx-auto">
              <div className="grid gap-8 grid-cols-2 text-2xl text-secondaryText">
                <div className="">
                  <div className="py-2">
                    <div className="border-b-2 py-2">
                      <h3 className="font-medium">Описание</h3>
                    </div>
                  </div>
                  <div className="mt-4 ">
                    <p>{data.description}</p>
                  </div>
                </div>
                <div className="">
                  <div className="py-2">
                    <div className="border-b-2 py-2 ">
                      <h3 className="font-medium">Информация</h3>
                    </div>
                  </div>
                  <div className="mt-4 ">
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-8 py-2">
            <div className="container mx-auto">
              <div className="text-2xl text-secondaryText">
                <div className="py-2">
                  <div className="border-b-2 py-2 ">
                    <h3 className="font-medium">Актеры</h3>
                  </div>
                </div>
                <div className="mt-4 ">
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          </section>
          <section className="my-8 py-2">
            <div className="container mx-auto">
              <div className="text-2xl text-secondaryText">
                <div className="py-2">
                  <div className="border-b-2 py-2 ">
                    <h3 className="font-medium">Похожие</h3>
                  </div>
                </div>
                <div className="mt-4 ">
                  <Slider
                    slidesPerView={6}
                    slidesPerGroup={1}
                    speed={1000}
                    allowTouchMove={false}
                    customNavigation
                    direction="horizontal">
                    {similars &&
                      similars.items.map((film: any) => (
                        <SwiperSlide key={film.filmId} className="p-2 ">
                          <Link to={`/film/${film.filmId}`}>
                            <div className="relative">
                              <img src={film.posterUrlPreview} alt="1" className="rounded-md " />
                            </div>
                            <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                              <span className="text-sm mt-2 font-normal"> {film.nameRu}</span>
                            </div>
                          </Link>
                        </SwiperSlide>
                      ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Film;
