import React from 'react';
import ReactPlayer from 'react-player';
import { useGetPremiersQuery, useGetTopQuery, useGetVideosQuery } from '../../services/moviesAPI';
import SimpleSlider from '../Slider';

const Main = () => {
  // const { data, error, isLoading } = useGetPremiersQuery({ year: 2022, month: 'MARCH' });
  const { data, error, isLoading } = useGetTopQuery({ type: 'TOP_AWAIT_FILMS', page: 1 });
  // const { data, error, isLoading } = useGetVideosQuery({ id: 1108401 });

  return (
    <div className="bg-accentDark h-[calc(100vh_-_88px)]">
      {/* {data && data.films.map((film: any) => )} */}
      <SimpleSlider />
    </div>
  );
};

export default Main;
