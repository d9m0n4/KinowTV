import React from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetFilmBudgetQuery,
  useGetFilmByIdQuery,
  useGetSerialSeasonsQuery,
  useGetSimilarsByIdQuery,
  useGetStaffByFilmIdQuery,
} from '../services/moviesAPI';
import Button from '../components/shared/Button';
import { SwiperSlide } from 'swiper/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { IStaff } from '../models/staff';
import Slider from '../components/shared/Slider/Slider';
import { Episode } from '../models/serailSeasons';
import FilmSlide from '../components/shared/FilmSlide';
import PersonSlide from '../components/shared/PersonSlide';
import Cheveron from '../components/ui/cheveron';
import { toDateString } from '../utils/toLocaleDateString';

export const Film = () => {
  const { id } = useParams();

  const [activeSeason, setActiveSeason] = React.useState<Episode[]>([]);

  const { data, error, isLoading } = useGetFilmByIdQuery(id ?? skipToken);
  const { data: similars, error: e, isLoading: l } = useGetSimilarsByIdQuery(id ?? skipToken);
  const { data: persons } = useGetStaffByFilmIdQuery(id ?? skipToken);
  const { data: filmBudget } = useGetFilmBudgetQuery(id ?? skipToken);
  const { data: seasons } = useGetSerialSeasonsQuery(id ?? skipToken, { skip: !data?.serial });

  const getActors = (actors: IStaff[]) =>
    actors.filter((person) => person.professionKey === 'ACTOR');

  const filmLength = (length: number) => {
    const h = Math.floor(length / 60);
    const m = Math.floor(length % 60);
    return h < 1 ? `${m} мин` : `${h}ч ${m}мин`;
  };

  if (error) {
    return <div>Фильм не найден</div>;
  }

  return (
    <>
      {data && (
        <>
          <section className="h-[calc(100vh_-_88px)]">
            <div className="relative h-full">
              <img
                className="block object-cover h-full w-full"
                src={data.coverUrl ? data.coverUrl : data.posterUrl}
                alt=""
              />
              <div className="absolute top-0 left-0 bottom-0 w-full gradient flex" />
              <div className="container mx-auto absolute inset-0  flex items-center">
                <div className="w-2/5 mx-4 text-lightGray text-2xl">
                  <h1 className="text-7xl font-bold">
                    {data.nameRu || data.nameEn || data.nameOriginal}
                  </h1>
                  <div className="py-2 flex  mt-6 justify-between font-medium text-gray/75">
                    {(data.ratingImdb || data.ratingKinopoisk) && (
                      <span className="bg-gray rounded-md py-1 px-2 font-bold text-base block text-accentDark">
                        {data.ratingImdb ? data.ratingImdb.toFixed(1) : data.ratingKinopoisk}
                      </span>
                    )}
                    <span>{data.year}</span>
                    <span>{data.genres[0].genre}</span>
                    {data.type === 'TV_SERIES' && <span>{'Сериал'}</span>}
                    {data.filmLength && <span>{filmLength(data.filmLength)}</span>}
                    {data.ratingAgeLimits && (
                      <span className="bg-gray rounded-md py-1 px-2 font-bold text-base block text-accentDark">
                        {data.ratingAgeLimits.substring(3) + '+'}
                      </span>
                    )}
                  </div>
                  {data.shortDescription && (
                    <div className="py-2 my-2">
                      <p>{data.shortDescription}</p>
                    </div>
                  )}
                  {data.slogan && (
                    <div className="py-2">
                      <p className="italic text-base text-secondaryText/60">{data.slogan}</p>
                    </div>
                  )}
                  <div className="flex justify-between py-2 mt-4">
                    <Button className="px-32 py-2 bg-accentPurple-light rounded-lg">
                      Смотреть
                    </Button>
                    <i className="px-4 py-3 bg-accentDark/80 rounded-lg">
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V19L8 15.5L1 19V3Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {seasons && (
            <section className="my-8 py-2 text-secondaryText">
              <div className="container mx-auto">
                {
                  <Slider
                    slidesPerView={'auto'}
                    speed={1000}
                    withShadow={false}
                    allowTouchMove={false}
                    direction="horizontal">
                    {seasons.items.map((s) => (
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
                              {data && (
                                <img
                                  src={data.coverUrl ? data.coverUrl : data.posterUrl}
                                  alt=""
                                  className="w-full h-full object-cover "
                                />
                              )}
                            </div>
                            <div className="mt-1 flex flex-col">
                              <span className="">Серия: {episode.episodeNumber}</span>
                              <span>{episode.nameRu}</span>
                              <span className="text-gray/80">
                                {toDateString(episode.releaseDate)}
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Slider>
                  </div>
                )}
              </div>
            </section>
          )}
          <section className="my-8 py-2">
            <div className="container mx-auto">
              <div className="flex gap-8 text-2xl text-secondaryText">
                {data.description && (
                  <div className="mb-4 flex-1">
                    <div className="py-2">
                      <div className="border-b-2 py-2 border-borderGray">
                        <h3 className="font-medium">Описание</h3>
                      </div>
                    </div>
                    <div className="mt-4 ">
                      <p>{data.description}</p>
                    </div>
                  </div>
                )}
                {filmBudget && filmBudget?.items.length > 0 && (
                  <div className="mb-4 flex-1">
                    <div className="py-2">
                      <div className="border-b-2 py-2 border-borderGray">
                        <h3 className="font-medium">Информация</h3>
                      </div>
                    </div>
                    <div className="mt-4 ">
                      {filmBudget.items.map((item) => (
                        <div key={item.type} className="flex justify-between my-2 text-base">
                          <h6 className="text-ligth/50 ">
                            {item.type === 'BUDGET'
                              ? 'Бюджет'
                              : item.type === 'WORLD'
                              ? 'Сборы в Мире'
                              : item.type === 'RUS'
                              ? 'Сборы в России'
                              : item.type === 'USA'
                              ? 'Сборы в США'
                              : 'Маркетинг'}
                          </h6>
                          <span>{`${item.symbol} ${item.amount}`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          {persons && (
            <section className="my-8 py-2">
              <div className="container mx-auto">
                <div className="text-2xl text-secondaryText">
                  <div className="py-2">
                    <div className="border-b-2 py-2 border-borderGray">
                      <h3 className="font-medium">Актеры</h3>
                    </div>
                  </div>
                  <div className="mt-4 ">
                    <Slider
                      slidesPerView={'auto'}
                      slidesPerGroup={4}
                      speed={1000}
                      allowTouchMove={false}
                      direction="horizontal">
                      {getActors(persons).map((person) => (
                        <SwiperSlide key={person.staffId} className="p-2 max-w-[16.6%]">
                          <PersonSlide
                            personId={person.staffId}
                            personImg={person.posterUrl}
                            personName={person.nameRu || person.nameEn}
                          />
                        </SwiperSlide>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </section>
          )}
          {similars && (
            <section className="my-8 py-2">
              <div className="container mx-auto">
                <div className="text-2xl text-secondaryText">
                  <div className="py-2">
                    <div className="border-b-2 py-2 border-borderGray">
                      <h3 className="font-medium">Похожие</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Slider
                      slidesPerView={'auto'}
                      slidesPerGroup={1}
                      speed={1000}
                      allowTouchMove={false}
                      direction="horizontal">
                      {similars.items.map((film) => (
                        <SwiperSlide key={film.filmId} className="p-2 max-w-[16.6%]">
                          <FilmSlide
                            filmId={film.filmId}
                            filmImg={film.posterUrlPreview}
                            filmName={film.nameRu || film.nameEn}
                          />
                        </SwiperSlide>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};
