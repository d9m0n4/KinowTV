import React from 'react';
import { countries, order, ratings, years } from '../../constants/film';
import { useActions } from '../../hooks/useActions';
import { filterButtonData, FilterButton } from './FilterButton';
import Button from './Button';

export const PageFilters = () => {
  const { setCountry, setYear, setRating, setOrder, reset } = useActions();

  const [orderName, setOrderName] = React.useState<string>(order[0].name);

  const setFilmOrder = (data: filterButtonData) => {
    setOrder(data.value);
    setOrderName(data.name);
  };
  //TODO: сделать появление кнопки "сбросить фильтр" только после изменения фильтров, по умолчанию кнопки нет
  return (
    <div className="flex justify-between mb-8">
      <div className="flex flex-1 ">
        <FilterButton title="Страна" data={countries} onChange={(data) => setCountry(data.value)} />
        <FilterButton title="Годы" data={years} onChange={(data) => setYear(data.value)} />
        <FilterButton title="Рейтинг" data={ratings} onChange={(data) => setRating(data.value)} />
        <Button
          onClick={reset}
          children="Сбросить фильтр"
          className="px-4 py-2 bg-[#282a2e] rounded-lg text-secondaryText"
        />
        <FilterButton title={orderName} data={order} onChange={setFilmOrder} />
      </div>
    </div>
  );
};
