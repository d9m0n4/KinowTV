import React from 'react';

import { FilmOrder, FilmTOP } from '../constants/film';
import { SwiperSlide } from 'swiper/react';
import { useGetFilmsByFiltersQuery, useGetTopQuery } from '../services/moviesAPI';

import Slider from '../components/shared/Slider/Slider';
import FilmSlide from '../components/shared/FilmSlide';
import Section from '../components/shared/Section';

import 'swiper/css';
import { FirstScreen } from '../components/layout';

export const Main = () => {
  const { data, error, isLoading } = useGetTopQuery({
    type: FilmTOP.TOP_100_POPULAR_FILMS,
    page: 1,
  });
  const {
    data: f,
    error: e,
    isLoading: l,
  } = useGetFilmsByFiltersQuery({
    genres: 18,
    order: FilmOrder.YEAR,
    yearTo: 2022,
    page: 5,
  });
  return (
    <main>
      <FirstScreen />

      {data && (
        <Section title="Рекомендуем посмотреть">
          <Slider
            speed={1000}
            allowTouchMove={false}
            slidesPerGroup={2}
            slidesPerView="auto"
            direction="horizontal">
            {data.films.map((film) => (
              <SwiperSlide key={film.filmId} className="p-2 max-w-[16.6%]">
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
        </Section>
      )}

      {f && (
        <Section title="Новинки">
          <Slider
            slidesPerView={'auto'}
            slidesPerGroup={1}
            speed={1000}
            allowTouchMove={false}
            direction="horizontal">
            {f.items.map((film) => (
              <SwiperSlide key={film.kinopoiskId} className="p-2 max-w-[16.6%]">
                <FilmSlide
                  filmId={film.kinopoiskId}
                  filmImg={film.posterUrlPreview}
                  filmName={film.nameRu}
                  year={film.year}
                  countries={film.countries}
                  rating={film.ratingImdb}
                />
              </SwiperSlide>
            ))}
          </Slider>
        </Section>
      )}

      {data && (
        <Section title="С Высоким рейтингом">
          <Slider
            speed={1000}
            allowTouchMove={false}
            slidesPerGroup={6}
            slidesPerView="auto"
            direction="horizontal">
            {data.films.map((film) => (
              <SwiperSlide key={film.filmId} className="p-2 max-w-[16.6%]">
                <FilmSlide filmId={film.filmId} filmImg={film.posterUrlPreview} />
              </SwiperSlide>
            ))}
          </Slider>
        </Section>
      )}
    </main>
  );
};
