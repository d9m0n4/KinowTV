import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import Hamburger from '../shared/Hamburger';
import Logo from '../ui/Logo';
import SearchIcon from '../ui/SearchIcon';

const Header = () => {
  return (
    <>
      <div className="bg-accentDark shadow-md">
        <div className="container mx-auto">
          <div className=" p-6 flex justify-between items-center">
            <Hamburger onClick={() => console.log(123)} />
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
          {/* меню */}
          {/* {isMenuOpen && (
            <div className="p-4 menu absolute z-10">
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
          )} */}
          {/* меню */}
        </div>
      </div>
    </>
  );
};

export default Header;
