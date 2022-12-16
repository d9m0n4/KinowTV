import React from 'react';
import { Link } from 'react-router-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Button from '../shared/Button';
import Hamburger from '../shared/Hamburger';
import Menu from '../shared/Menu';
import Logo from '../ui/Logo';
import SearchIcon from '../ui/SearchIcon';

export const Header = () => {
  const hamburgerRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  useOutsideClick(hamburgerRef, isOpen, setIsOpen);

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
