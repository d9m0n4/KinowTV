import React from 'react';
import Logo from '../components/ui/Logo';

export const Auth = () => {
  return (
    <section className="bg-accentDark h-screen">
      <div className="container mx-auto h-full">
        <div className="flex flex-col h-full">
          <div className="py-8 flex items-center justify-center">
            <Logo />
          </div>
          <div className="flex-auto flex items-center justify-center h-full">форма</div>
        </div>
      </div>
    </section>
  );
};
