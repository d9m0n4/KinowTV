import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  useGetFilmBudgetQuery,
  useGetFilmByIdQuery,
  useGetSerialSeasonsQuery,
  useGetSimilarsByIdQuery,
  useGetStaffByFilmIdQuery,
} from '../services/moviesAPI';
import Button from '../components/shared/Button';
import { SwiperSlide, useSwiperSlide } from 'swiper/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import PersonAvatar from '../components/shared/PersonAvatar';
import { IStaff } from '../models/staff';
import Slider from '../components/shared/Slider/Slider';
import { Episode, ISeasons } from '../models/serailSeasons';
import FilmSlide from '../components/shared/FilmSlide';
import PersonSlide from '../components/shared/PersonSlide';
import Loader from '../components/shared/Loader';

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

  React.useEffect(() => {
    console.log(activeSeason);
  }, [activeSeason]);

  if (error) {
    return <div>Фильм не найден</div>;
  }

  return (
    <>
      <Loader in={isLoading} />
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
            <section className="my-8 py-2">
              <div className="container mx-auto">
                {
                  <Slider
                    slidesPerView={4}
                    slidesPerGroup={4}
                    speed={1000}
                    allowTouchMove={false}
                    customNavigation
                    direction="horizontal">
                    {seasons.items.map((s) => (
                      <SwiperSlide
                        onClick={() => setActiveSeason(s.episodes)}
                        key={s.number * Math.random()}
                        className="p-2">
                        {({ isActive }: { isActive: any }) => (
                          <div className="rounded-lg border p-4 max-h-24">
                            <img src={data.posterUrlPreview} alt="" />
                            <div>Сезон {s.number}</div>
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Slider>
                }
                {activeSeason && (
                  <Slider
                    slidesPerView={4}
                    slidesPerGroup={4}
                    speed={1000}
                    allowTouchMove={false}
                    customNavigation
                    direction="horizontal">
                    {activeSeason.map((episode) => (
                      <SwiperSlide
                        className="p-2 h-auto flex flex-col"
                        key={episode.episodeNumber + episode.releaseDate + Math.random()}>
                        <div className="rounded-lg border p-4">
                          <div>{episode.episodeNumber}</div>
                          <div>{episode.nameRu}</div>
                          <div>{episode.releaseDate}</div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Slider>
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
                      slidesPerView={8}
                      slidesPerGroup={4}
                      speed={1000}
                      allowTouchMove={false}
                      customNavigation
                      direction="horizontal">
                      {getActors(persons).map((person) => (
                        <SwiperSlide key={person.staffId} className="p-2">
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
                  <div className="mt-4 ">
                    <Slider
                      slidesPerView={similars.total > 6 ? 6 : similars.total}
                      speed={1000}
                      allowTouchMove={false}
                      customNavigation
                      direction="horizontal">
                      {similars.items.map((film) => (
                        <SwiperSlide key={film.filmId} className="p-2 h-auto flex flex-col">
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
