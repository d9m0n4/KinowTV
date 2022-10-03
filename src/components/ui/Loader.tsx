import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen w-screen bg-accentDark flex justify-center items-center text-6xl font-bold tracking-wider relative">
      <div className="flex absolute ">
        <h1 className="text-secondaryText animate-[textShadow_2s_ease_infinite]">KiNoW</h1>
        <span className="text-accentPurple">TV</span>
      </div>
    </div>
  );
};

export default Loader;
