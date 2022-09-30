import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen w-screen bg-accentDark flex justify-center items-center text-6xl font-medium tracking-wider ">
      <div className=" flex">
        <h1 className="text-secondaryText">KiNoW</h1>
        <span className="text-accentPurple">TV</span>
      </div>
    </div>
  );
};

export default Loader;
