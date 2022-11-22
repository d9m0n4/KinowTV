import React from 'react';
import clsx from 'clsx';

interface IHamburger {
  onClick?: () => void;
  isActive: boolean;
}

const Hamburger = React.forwardRef<HTMLDivElement, React.PropsWithRef<IHamburger>>(
  ({ onClick, isActive = false }, ref) => {
    return (
      <div ref={ref} className=" bg-accentDark  flex flex-col justify-center transition-all ">
        <div className="relative  mx-auto">
          <nav>
            <button
              onClick={onClick}
              className="text-accentPurple w-10 h-10 relative focus:outline-none bg-white">
              <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={clsx(
                    'block absolute h-0.5 w-6 bg-lightGray transform transition duration-500 ease-in-out',
                    { 'rotate-45': isActive },
                    { '-translate-y-1.5': !isActive },
                  )}></span>
                <span
                  aria-hidden="true"
                  className={clsx(
                    'block absolute  h-0.5 w-6 bg-lightGray   transform transition duration-500 ease-in-out',
                    { 'opacity-0': isActive },
                  )}></span>
                <span
                  aria-hidden="true"
                  className={clsx(
                    'block absolute  h-0.5 w-6 bg-lightGray transform  transition duration-500 ease-in-out ',
                    { '-rotate-45': isActive },
                    {
                      'translate-y-1.5': !isActive,
                    },
                  )}></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    );
  },
);

export default Hamburger;
