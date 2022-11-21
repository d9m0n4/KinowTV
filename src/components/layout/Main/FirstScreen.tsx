import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { FilmTOP } from '../../../constants/film';
import { useGetTopQuery } from '../../../services/moviesAPI';
import FilmSlide from '../../shared/FilmSlide';
import Slider from '../../shared/Slider/Slider';
import cover from '../../../assets/1.jpg';

const FirstScreen = () => {
  const { data, error, isLoading } = useGetTopQuery({
    type: FilmTOP.TOP_100_POPULAR_FILMS,
    page: 1,
  });
  return (
    <section className="bg-accentDark h-[calc(100vh_-_88px)]">
      <div className="w-full h-full relative">
        <img className="object-cover w-full h-full" src={cover} alt="" />
        <div className="absolute inset-0 bg-accentDark opacity-30"></div>
        <div className="absolute coverShadow left-0 top-0 bottom-0 w-1/4"></div>
        <div className="container mx-auto absolute inset-0">
          {data && (
            <div className="absolute right-0 top-0 bottom-0 flex">
              <Slider autoplay direction="vertical" slidesPerView={5}>
                {data &&
                  data.films.map((film) => (
                    <SwiperSlide key={film.filmId} className="p-2">
                      <Link to={`/film/${film.filmId}`}>
                        <FilmSlide filmId={film.filmId} filmImg={film.posterUrlPreview} />
                      </Link>
                    </SwiperSlide>
                  ))}
              </Slider>
              <Slider autoplay reverseDirection slidesPerView={5}>
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
  );
};

export default FirstScreen;