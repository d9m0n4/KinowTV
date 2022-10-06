import React from 'react';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const transitionStylesText = {
  entering: { transform: 'scale(1)' },
  entered: { transform: 'scale(1)' },
  exiting: { transform: 'scale(0.5)' },
  exited: { transform: 'scale(0)' },
  unmounted: { transform: 'scale(0)' },
};

const Loader = ({ in: inProp }: any) => {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
            position: 'fixed',
          }}>
          <div className="h-screen w-screen bg-accentDark flex justify-center items-center text-6xl font-bold tracking-wider relative">
            <div
              className="flex absolute transition-transform duration-300"
              style={{ ...transitionStylesText[state] }}>
              <h1 className="text-secondaryText animate-[textShadow_2s_ease_infinite] transition-colors">
                KiNoW
              </h1>
              <span className="text-accentPurple">TV</span>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Loader;
