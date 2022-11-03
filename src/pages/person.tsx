import { skipToken } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetStaffByPersonIdQuery } from '../services/moviesAPI';

const Person = () => {
  const { id } = useParams();
  const { data } = useGetStaffByPersonIdQuery(id ?? skipToken);
  return (
    <div>
      <section>
        <div className="container mx-auto">
          {data && (
            <div>
              <div>
                <img src={data.posterUrl} alt="" />
              </div>
              <div>
                {data.age}
                {data.birthday}
                {data.birthplace}
                {data.facts.map((fact) => (
                  <p>{fact}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Person;
