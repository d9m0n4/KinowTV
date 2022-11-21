import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const Menu = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={clsx('p-4 menu absolute z-10', isActive ? 'block' : 'hidden')}>
      <nav>
        <ul className="flex">
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/">
              Главная
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/">
              Фильмы
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/">
              Мультфильмы
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/">
              Сериалы
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/">
              Новинки
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/">
              Избранное
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
