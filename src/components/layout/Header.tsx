import clsx from 'clsx';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../shared/Button';
import Hamburger from '../shared/Hamburger';
import Logo from '../ui/Logo';
import SearchIcon from '../ui/SearchIcon';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="bg-accentDark shadow-md">
        <div className="container mx-auto">
          <div className=" p-6 flex justify-between items-center">
            <Hamburger onClick={() => setIsOpen(!isOpen)} />
            <Logo />
            <div className="flex items-center">
              <div className="px-2 flex items-center mr-2">
                <Button children={<SearchIcon />} />
              </div>
              <div className="px-2 flex items-center text-secondaryText text-xl">
                <Link className="text-xl uppercase font-semibold " to="/">
                  Войти
                </Link>
              </div>
            </div>
          </div>

          <div className={clsx('p-4 menu absolute z-10', isOpen ? 'block' : 'hidden')}>
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
        </div>
      </div>
    </>
  );
};

export default Header;
