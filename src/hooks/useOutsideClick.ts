import React from 'react';

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  attached: boolean = true,
  clickHandler: React.Dispatch<React.SetStateAction<boolean>>,
): void {
  React.useEffect(() => {
    if (!attached) return;
    const isOutsideClick = (event: Event) => {
      const el = ref?.current;
      if (!el || !el.contains(event.target as Node)) {
        clickHandler(!attached);
      }
    };
    document.addEventListener('click', isOutsideClick);

    return () => {
      document.removeEventListener('click', isOutsideClick);
    };
  }, [ref, clickHandler, attached]);
}
