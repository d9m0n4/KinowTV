import React from 'react';
import clsx from 'clsx';

interface IHamburger {
  onClick: () => void;
}

const Hamburger: React.FC<IHamburger> = ({ onClick }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div onClick={onClick} className=" bg-accentDark  flex flex-col justify-center transition-all ">
      <div className="relative  mx-auto">
        <nav x-data="{ open: false }">
          <button
            className="text-accentPurple w-10 h-10 relative focus:outline-none bg-white"
            onClick={() => setOpen(!open)}>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={clsx(
                  'block absolute h-0.5 w-6 bg-lightGray transform transition duration-500 ease-in-out',
                  { 'rotate-45': open },
                  { '-translate-y-1.5': !open },
                )}></span>
              <span
                aria-hidden="true"
                className={clsx(
                  'block absolute  h-0.5 w-6 bg-lightGray   transform transition duration-500 ease-in-out',
                  { 'opacity-0': open },
                )}></span>
              <span
                aria-hidden="true"
                className={clsx(
                  'block absolute  h-0.5 w-6 bg-lightGray transform  transition duration-500 ease-in-out ',
                  { '-rotate-45': open },
                  {
                    'translate-y-1.5': !open,
                  },
                )}></span>
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Hamburger;
