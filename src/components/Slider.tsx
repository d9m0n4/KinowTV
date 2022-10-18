import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetTopQuery, useGetVideosQuery } from '../services/moviesAPI';

const SimpleSlider = () => {
  // const { data, error, isLoading } = useGetVideosQuery({ id: 1108401 });

  const { data, error, isLoading } = useGetTopQuery({ type: 'TOP_AWAIT_FILMS', page: 1 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}></Slider>
    </div>
  );
};

export default SimpleSlider;
