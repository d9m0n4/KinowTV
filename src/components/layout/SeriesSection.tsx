import { skipToken } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Episode, ISeasons } from '../../models/serailSeasons';
import { useGetSerialSeasonsQuery } from '../../services/moviesAPI';
import { toDateString } from '../../utils/toLocaleDateString';
import Slider from '../shared/Slider/Slider';
import Cheveron from '../ui/cheveron';

export const SeriesSection = ({ id, cover }: { id: string; cover: string }) => {
  const [activeSeason, setActiveSeason] = React.useState<Episode[]>([]);
  const { data } = useGetSerialSeasonsQuery(id ?? skipToken);

  React.useEffect(() => {
    return () => setActiveSeason([]);
  }, [id]);

  return (
    <section className="my-8 py-2 text-secondaryText">
      <div className="container mx-auto">
        {
          <Slider
            slidesPerView={'auto'}
            speed={1000}
            withShadow={false}
            allowTouchMove={false}
            direction="horizontal">
            {data &&
              data.items.map((s) => (
                <SwiperSlide
                  onClick={() => setActiveSeason(s.episodes)}
                  key={s.number * Math.random()}
                  className="p-2 max-w-[16.6%] ">
                  {({ isActive }: { isActive: any }) => (
                    <div className="p-2 border-b-2 flex justify-between items-center">
                      <div>
                        <div className="text-xl">Сезон: {s.number}</div>
                        <div className="font-light">Серий: {s.episodes.length}</div>
                      </div>
                      <div className="-rotate-90 cursor-pointer ">
                        <Cheveron stroke="#fefeff" />
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
          </Slider>
        }
        {activeSeason && (
          <div className="mt-2">
            <Slider
              slidesPerView={'auto'}
              speed={1000}
              withShadow={false}
              allowTouchMove={false}
              direction="horizontal">
              {activeSeason.map((episode) => (
                <SwiperSlide
                  className="p-2 max-w-[16.6%]"
                  key={episode.episodeNumber + Math.random()}>
                  <div className="relative">
                    <div className="h-[124px] rounded-lg overflow-hidden">
                      <img src={cover} alt="" className="w-full h-full object-cover " />
                    </div>
                    <div className="mt-1 flex flex-col">
                      <span className="">Серия: {episode.episodeNumber}</span>
                      <span>{episode.nameRu || episode.nameEn}</span>
                      {episode.releaseDate && (
                        <span className="text-gray/80">{toDateString(episode.releaseDate)}</span>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};
