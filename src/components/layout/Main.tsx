import React from 'react';
import {
  useGetImagesQuery,
  useGetPremiersQuery,
  useGetTopQuery,
  useGetVideosQuery,
} from '../../services/moviesAPI';
import SimpleSlider from '../Slider';
import cover from '../../assets/1.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import CustomNextArrow from '../ui/Slider/arrows/nextArrow';
import CustomPrevArrow from '../ui/Slider/arrows/prevArrow';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Swiper as SwiperType } from 'swiper';

import 'swiper/css';

const Main = () => {
  // const { data, error, isLoading } = useGetPremiersQuery({ year: 2022, month: 'DECEMBER' });
  const { data, error, isLoading } = useGetTopQuery({ type: 'TOP_250_BEST_FILMS', page: 1 });
  // const { data, error, isLoading } = useGetVideosQuery({ id: 1108401 });
  // const { data } = useGetImagesQuery({ id: 1108401 });

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   nextArrow: <CustomNextArrow />,
  //   prevArrow: <CustomPrevArrow />,
  //   touchMove: false,
  // };
  // const settings2 = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   nextArrow: <CustomNextArrow />,
  //   prevArrow: <CustomPrevArrow />,
  //   touchMove: false,
  // };

  const swiperRef = React.useRef<SwiperType>();

  return (
    <>
      <section className="bg-accentDark h-[calc(100vh_-_88px)]">
        <div className="w-full h-full relative">
          <img className="object-cover w-full h-full" src={cover} alt="" />
          <div className="absolute inset-0 bg-accentDark opacity-30"></div>
          <div className="absolute coverShadow left-0 top-0 bottom-0 w-1/4"></div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto my-4">
          <div className="text-2xl font-bold text-ligth">
            <article>
              <h3>Рекомендуем посмотреть</h3>
              <div className="mt-4">
                <div className="relative">
                  <Swiper
                    slidesPerView={6}
                    slidesPerGroup={6}
                    loop
                    onBeforeInit={(swiper) => (swiperRef.current = swiper)}
                    allowTouchMove={false}>
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
                  </Swiper>
                  <CustomPrevArrow swiperRef={swiperRef} className="absolute -left-2.5 top-0" />
                  <CustomNextArrow swiperRef={swiperRef} className="absolute -right-2.5 top-0" />
                </div>

                {/* <Slider {...settings}>
                  {data &&
                    data.films.map((film: any) => (
                      <div key={film.filmId} className=" p-2 ">
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
                      </div>
                    ))}
                </Slider> */}
              </div>
            </article>
          </div>
          <div className="text-2xl font-bold text-ligth">
            <article>
              <h3>Рекомендуем посмотреть</h3>
              <div className="mt-4">
                {/* <Slider {...settings2}>
                  {data &&
                    data.films.map((film: any) => (
                      <div key={film.filmId} className=" p-2 ">
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
                      </div>
                    ))}
                </Slider> */}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
