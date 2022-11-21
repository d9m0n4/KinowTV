import React from 'react';
import { useGetFilmsByFiltersQuery, useGetTopQuery } from '../services/moviesAPI';

import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Slider from '../components/shared/Slider/Slider';
import FilmSlide from '../components/shared/FilmSlide';
import { FilmOrder, FilmTOP, FilmType } from '../constants/film';
import Section from '../components/shared/Section';
import FirstScreen from '../components/layout/Main/FirstScreen';

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
    <main>
      <FirstScreen />

      {data && (
        <Section title="Рекомендуем посмотреть">
          <Slider
            speed={1000}
            allowTouchMove={false}
            slidesPerGroup={2}
            slidesPerView="auto"
            customNavigation
            direction="horizontal">
            {data.films.map((film) => (
              <SwiperSlide key={film.filmId} className="p-2 h-auto flex flex-col max-w-[240px]">
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
            slidesPerView={4}
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
        </Section>
      )}

      {data && (
        <Section title="С Высоким рейтингом">
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
        </Section>
      )}
    </main>
  );
};

export default Main;
