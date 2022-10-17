import React from 'react';
import { useGetPremiersQuery, useGetTopQuery } from '../../services/moviesAPI';

const Main = () => {
  // const { data, error, isLoading } = useGetPremiersQuery({ year: 2022, month: 'MARCH' });
  const { data, error, isLoading } = useGetTopQuery({ type: 'TOP_AWAIT_FILMS', page: 1 });

  return (
    <div className="bg-accentDark h-[calc(100vh_-_88px)]">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* {data && data.items.map((item: any) => <img src={item.posterUrlPreview} alt="" />)} */}
          {data &&
            data.films.map((film: any) => (
              <div>
                <img src={film.posterUrlPreview} alt="" />
                <h5>{film.nameRu}</h5>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Main;
