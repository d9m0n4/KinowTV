import { skipToken } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { useParams } from 'react-router-dom';
import PersonAvatar from '../components/shared/PersonAvatar';
import { IPerson } from '../models';
import { useGetStaffByPersonIdQuery } from '../services/moviesAPI';
import { uniqueObjArray } from '../utils/uniqueObjArray';

const Person = () => {
  const { id } = useParams();
  const { data } = useGetStaffByPersonIdQuery(id ?? skipToken);

  const [isActiveTab, setIsActiveTab] = React.useState(false);

  return (
    <>
      {data && (
        <div>
          <section className="my-8 py-2">
            <div className="container mx-auto">
              <div className="flex">
                <div className="flex-shrink-0 flex-grow-0">
                  <PersonAvatar
                    src={data.posterUrl}
                    alt={data.nameRu}
                    w="w-80"
                    h="h-128"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-auto px-8 text-secondaryText">
                  <div className="mb-4">
                    {data.nameRu ? (
                      <>
                        <div className="mb-4 flex">
                          <h2 className="text-4xl font-bold">{data.nameRu}</h2>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="my-2 flex">
                          <h2 className="w-48">{data.nameEn}</h2>
                        </div>
                      </>
                    )}
                    {data.profession && (
                      <>
                        <div className="my-2 flex">
                          <h6 className="w-48">Карьера:</h6>
                          <span>{data.profession}</span>
                        </div>
                      </>
                    )}
                    {data.age && (
                      <>
                        <div className="my-2 flex">
                          <h6 className="w-48">Возраст:</h6>
                          <span>{data.age}</span>
                        </div>
                      </>
                    )}
                    {data.growth && (
                      <>
                        <div className="my-2 flex">
                          <h6 className="w-48">Рост:</h6>
                          <span>{data.growth}</span>
                        </div>
                      </>
                    )}
                    {data.birthday && (
                      <>
                        <div className="my-2 flex">
                          <h6 className="w-48">Дата рождения:</h6>
                          <span>{data.birthday}</span>
                        </div>
                      </>
                    )}
                    {data.birthplace && (
                      <>
                        <div className="my-2 flex">
                          <h6 className="w-48">Место рождения</h6>
                          <span>{data.birthplace}</span>
                        </div>
                      </>
                    )}
                    {data.death && (
                      <>
                        <div className="my-2 flex">
                          <h6 className="w-48">Дата смерти:</h6>
                          <span>{data.death}</span>
                        </div>
                      </>
                    )}
                    {data.deathplace && (
                      <>
                        <div className="my-2 flex">
                          <h6 className="w-48">Место смерти:</h6>
                          <span>{data.deathplace}</span>
                        </div>
                      </>
                    )}
                    {data.films.length > 0 && (
                      <>
                        <div className="my-2 flex">
                          <h6 className="w-48">Всего фильмов:</h6>
                          <span>{data.films.length}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="my-8 py-2">
            <div className="container mx-auto">
              <div className="text-secondaryText">
                {data.films.length > 0 && (
                  <div className="my-2 ">
                    <h3 className="text-2xl font-medium py-2">Фильмография</h3>

                    {/* <Tabs /> */}

                    <ul>
                      {data.films.map((film) => (
                        <li className="py-2 flex shadow-gray shadow-md" key={film.filmId}>
                          <h4>{film.nameRu}</h4>
                          <span>{film.rating}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="my-8 py-2">
            <div className="container mx-auto">
              <div className="text-secondaryText">
                {data.facts.length > 0 && (
                  <div className="my-2 ">
                    <h3 className="text-2xl font-medium py-2">Факты из жизни...</h3>
                    <ul>
                      {data.facts.map((fact) => (
                        <li className="py-2" key={fact}>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Person;
