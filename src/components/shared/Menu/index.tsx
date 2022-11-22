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
            <NavLink className="text-xl font-medium text-secondaryText" to="/films">
              Фильмы
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/cartoons">
              Мультфильмы
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/tv_show">
              Сериалы
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/new">
              Новинки
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink className="text-xl font-medium text-secondaryText" to="/favorites">
              Избранное
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
