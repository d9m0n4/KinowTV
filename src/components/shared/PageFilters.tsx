import React from 'react';
import { countries, years } from '../../constants/film';
import { useActions } from '../../hooks/useActions';
import { FilterButton } from './FilterButton';

export const PageFilters = () => {
  const { setCountry } = useActions();
  return (
    <div className="flex justify-between mb-8">
      <div className="flex ">
        <FilterButton title="Страна" data={countries} onChange={(c) => setCountry(c)} />
        <FilterButton title="Годы" data={years} onChange={(c) => console.log(c)} />
        <FilterButton title="Рейтинг" onChange={(e) => console.log(e)} />
      </div>
      <div>
        <FilterButton title="По рейтингу" onChange={(e) => console.log(e)} />
      </div>
    </div>
  );
};
