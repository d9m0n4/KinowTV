import React from 'react';

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): boolean {
  const [onElement, setOnElement] = React.useState(false);

  React.useEffect(() => {
    const isOutsideClick = (event: Event) => {
      console.log(ref.current?.contains(event.target as Node));

      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return setOnElement(!onElement);
      }
      return setOnElement(false);
    };
    document.addEventListener(mouseEvent, isOutsideClick);

    return () => {
      document.removeEventListener(mouseEvent, isOutsideClick);
    };
  }, [ref, mouseEvent, onElement]);

  return onElement;
}
