import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  useGetImagesQuery,
  useGetPremiersQuery,
  useGetTopQuery,
  useGetVideosQuery,
} from '../services/moviesAPI';
import { ControlBar, Player } from 'video-react';
import 'video-react/dist/video-react.css';

const SimpleSlider = () => {
  // const { data, error, isLoading } = useGetVideosQuery({ id: 1108401 });
  // const { data } = useGetImagesQuery({ id: 1108401 });
  const { data, error, isLoading } = useGetPremiersQuery({ year: 2022, month: 'DECEMBER' });

  // const { data, error, isLoading } = useGetTopQuery({ type: 'TOP_AWAIT_FILMS', page: 1 });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {data &&
          data.items.map((film: any) => (
            <div key={film.kinopoiskId} className="flex h-144">
              <img src={film.posterUrl} alt="" />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
