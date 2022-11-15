import React from 'react';
import {
  useGetFilmsByFiltersQuery,
  useGetImagesQuery,
  useGetPremiersQuery,
  useGetTopQuery,
  useGetVideosQuery,
} from '../services/moviesAPI';
import cover from '../assets/1.jpg';
import { Link } from 'react-router-dom';

import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Slider from '../components/shared/Slider/Slider';
import FilmSlide from '../components/shared/FilmSlide';
import { FilmOrder, FilmTOP, FilmType } from '../constants/film';

const Main = () => {
  const { data, error, isLoading } = useGetTopQuery({
    type: FilmTOP.TOP_100_POPULAR_FILMS,
    page: 1,
  });
  const {
    data: f,
    error: e,
    isLoading: l,
  } = useGetFilmsByFiltersQuery({
    yearFrom: 2022,
    type: FilmType.Film,
    genres: 2,
    order: FilmOrder.YEAR,
  });
  return (
    <>
      <section className="bg-accentDark h-[calc(100vh_-_88px)]">
        <div className="w-full h-full relative">
          <img className="object-cover w-full h-full" src={cover} alt="" />
          <div className="absolute inset-0 bg-accentDark opacity-30"></div>
          <div className="absolute coverShadow left-0 top-0 bottom-0 w-1/4"></div>
          <div className="container mx-auto absolute inset-0">
            {data && (
              <div className="absolute right-0 top-0 bottom-0 flex">
                <Slider autoplay>
                  {data &&
                    data.films.map((film) => (
                      <SwiperSlide key={film.filmId} className="p-2 h-full max-w-[140px]">
                        <Link to={`/film/${film.filmId}`}>
                          <FilmSlide filmId={film.filmId} filmImg={film.posterUrlPreview} />
                        </Link>
                      </SwiperSlide>
                    ))}
                </Slider>
                <Slider autoplay reverseDirection>
                  {data &&
                    data.films.map((film) => (
                      <SwiperSlide key={film.filmId} className="p-2 h-full max-w-[140px]">
                        <Link to={`/film/${film.filmId}`}>
                          <FilmSlide filmId={film.filmId} filmImg={film.posterUrlPreview} />
                        </Link>
                      </SwiperSlide>
                    ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </section>

      {data && (
        <section className="my-8 py-2">
          <div className="container mx-auto">
            <div className="text-2xl font-bold text-ligth">
              <article>
                <h3>Рекомендуем посмотреть</h3>
                <div className="mt-6">
                  <Slider
                    speed={1000}
                    allowTouchMove={false}
                    slidesPerGroup={2}
                    slidesPerView={6}
                    customNavigation
                    direction="horizontal">
                    {data.films.map((film) => (
                      <SwiperSlide key={film.filmId} className="p-2 h-auto flex flex-col">
                        <FilmSlide
                          filmId={film.filmId}
                          filmImg={film.posterUrlPreview}
                          countries={film.countries}
                          filmName={film.nameRu}
                          year={film.year}
                        />
                      </SwiperSlide>
                    ))}
                  </Slider>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {f && (
        <section className="my-8 py-2">
          <div className="container mx-auto">
            <div className="text-2xl font-bold text-ligth">
              <article>
                <h3>Новинки</h3>
                <div className="mt-6">
                  <Slider
                    slidesPerGroup={1}
                    speed={1000}
                    allowTouchMove={false}
                    customNavigation
                    direction="horizontal">
                    {f.items.map((film) => (
                      <SwiperSlide key={film.kinopoiskId} className="p-2 h-auto flex flex-col">
                        <FilmSlide filmId={film.kinopoiskId} filmImg={film.posterUrlPreview} />
                      </SwiperSlide>
                    ))}
                  </Slider>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {data && (
        <section className="my-8 py-2">
          <div className="container mx-auto">
            <div className="text-2xl font-bold text-ligth ">
              <article>
                <h3>С Высоким рейтингом</h3>
                <div className="mt-6">
                  <Slider
                    speed={1000}
                    allowTouchMove={false}
                    slidesPerGroup={6}
                    slidesPerView={6}
                    customNavigation
                    direction="horizontal">
                    {data.films.map((film) => (
                      <SwiperSlide key={film.filmId} className="p-2 h-auto flex flex-col">
                        <FilmSlide filmId={film.filmId} filmImg={film.posterUrlPreview} />
                      </SwiperSlide>
                    ))}
                  </Slider>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Main;
