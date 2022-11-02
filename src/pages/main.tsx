import React from 'react';
import {
  useGetImagesQuery,
  useGetPremiersQuery,
  useGetTopQuery,
  useGetVideosQuery,
} from '../services/moviesAPI';
import cover from '../assets/1.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Slider from '../components/ui/Slider/Slider';

const Main = () => {
  const { data, error, isLoading } = useGetTopQuery({ type: 'TOP_250_BEST_FILMS', page: 1 });
  return (
    <>
      <section className="bg-accentDark h-[calc(100vh_-_88px)]">
        <div className="w-full h-full relative">
          <img className="object-cover w-full h-full" src={cover} alt="" />
          <div className="absolute inset-0 bg-accentDark opacity-30"></div>
          <div className="absolute coverShadow left-0 top-0 bottom-0 w-1/4"></div>
          <div className="container mx-auto absolute inset-0">
            <div className="absolute right-0 top-0 bottom-0 flex">
              <Slider autoplay>
                {data &&
                  data.films.map((film: any) => (
                    <SwiperSlide key={film.filmId} className="p-2 h-full max-w-[140px]">
                      <Link to={`/film/${film.filmId}`}>
                        <div className="relative">
                          <img src={film.posterUrlPreview} alt="1" className="rounded-md " />
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
              </Slider>
              <Slider autoplay reverseDirection>
                {data &&
                  data.films.map((film: any) => (
                    <SwiperSlide key={film.filmId} className="p-2 h-full max-w-[140px]">
                      <Link to={`/film/${film.filmId}`}>
                        <div className="relative">
                          <img src={film.posterUrlPreview} alt="1" className="rounded-md " />
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="container mx-auto my-4">
          <div className="text-2xl font-bold text-ligth mt-6">
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
                  {data &&
                    data.films.map((film: any) => (
                      <SwiperSlide key={film.filmId} className="p-2 ">
                        <Link to={`/film/${film.filmId}`}>
                          <div className="relative">
                            <img src={film.posterUrlPreview} alt="1" className="rounded-md " />
                            <div className="absolute  inset-0  opacity-0 hover:opacity-100 transition-all">
                              <div className="inline-block py-2 px-4 bg-accentPurple rounded-lg">
                                <div>{film.rating}</div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between py-2 px-4 text-sm font-normal bg-accentWrapper">
                                <span>{film.year}</span>
                                <span>{film.countries[0].country}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                            <span className="text-sm mt-2 font-normal"> {film.nameRu}</span>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                </Slider>
              </div>
            </article>
          </div>
          <div className="text-2xl font-bold text-ligth mt-6">
            <article>
              <h3>Новинки</h3>
              <div className="mt-6">
                <Slider
                  slidesPerGroup={1}
                  speed={1000}
                  allowTouchMove={false}
                  customNavigation
                  direction="horizontal">
                  {data &&
                    data.films.map((film: any) => (
                      <SwiperSlide key={film.filmId} className="p-2 ">
                        <Link to={`/film/${film.filmId}`}>
                          <div className="relative">
                            <img src={film.posterUrlPreview} alt="1" className="rounded-md " />
                            <div className="absolute  inset-0  opacity-0 hover:opacity-100 transition-all">
                              <div className="inline-block py-2 px-4 bg-accentPurple rounded-lg">
                                <div>{film.rating}</div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between py-2 px-4 text-sm font-normal bg-accentWrapper">
                                <span>{film.year}</span>
                                <span>{film.countries[0].country}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                            <span className="text-sm mt-2 font-normal"> {film.nameRu}</span>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                </Slider>
              </div>
            </article>
          </div>
          <div className="text-2xl font-bold text-ligth mt-6">
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
                  {data &&
                    data.films.map((film: any) => (
                      <SwiperSlide key={film.filmId} className="p-2 ">
                        <Link to={`/film/${film.filmId}`}>
                          <div className="relative">
                            <img src={film.posterUrlPreview} alt="1" className="rounded-md " />
                            <div className="absolute  inset-0  opacity-0 hover:opacity-100 transition-all">
                              <div className="inline-block py-2 px-4 bg-accentPurple rounded-lg">
                                <div>{film.rating}</div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between py-2 px-4 text-sm font-normal bg-accentWrapper">
                                <span>{film.year}</span>
                                <span>{film.countries[0].country}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                            <span className="text-sm mt-2 font-normal"> {film.nameRu}</span>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                </Slider>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;