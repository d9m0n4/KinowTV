import React from 'react';
import Logo from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="mt-16 py-8 bg-dark">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-lightGray">© 2022</span>
          <Logo />
          <div></div>
        </div>
      </div>
    </footer>
  );
};
