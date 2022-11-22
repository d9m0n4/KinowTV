import clsx from 'clsx';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useOnClickOutside from '../../hooks/useOutsideClick';
import Button from '../shared/Button';
import Hamburger from '../shared/Hamburger';
import Menu from '../shared/Menu';
import Logo from '../ui/Logo';
import SearchIcon from '../ui/SearchIcon';

const Header = () => {
  const hamburgerRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="bg-accentDark shadow-md">
        <div className="container mx-auto">
          <div className=" p-6 flex justify-between items-center">
            <Hamburger ref={hamburgerRef} isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <Logo />
            <div className="flex items-center">
              <div className="px-2 flex items-center mr-2">
                <Button children={<SearchIcon />} />
              </div>
              <div className="px-2 flex items-center text-secondaryText text-xl">
                <Link className="text-xl uppercase font-semibold " to="/auth">
                  Войти
                </Link>
              </div>
            </div>
          </div>

          <Menu isActive={isOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;
