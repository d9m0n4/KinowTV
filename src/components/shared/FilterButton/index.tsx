import React from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import Cheveron from '../../ui/cheveron';
import Button from '../Button';

export type filterButtonData = {
  value: number | string;
  name: string;
};

interface IFilterButton {
  title: string;
  data?: filterButtonData[];
  onChange: (e: filterButtonData) => void;
}

export const FilterButton: React.FC<IFilterButton> = ({ title, data, onChange }) => {
  const [active, setActive] = React.useState(false);
  const filterButton = React.useRef<HTMLButtonElement>(null);
  useOutsideClick(filterButton, active, setActive);

  return (
    <div className="relative z-10 text-secondaryText mr-3  last:m-0 last:ml-auto w-40">
      <Button
        ref={filterButton}
        className="px-4 py-2 bg-[#282a2e] rounded-lg flex items-center justify-between w-full"
        onClick={() => setActive(!active)}>
        <span className="mr-2">{title}</span>
        <span className={` transition-all ${active && 'rotate-180'}`}>
          <Cheveron size={16} stroke="#fefefe" />
        </span>
      </Button>
      {active && (
        <ul className="absolute  mt-2 list-none rounded-lg bg-[#282a2e] shadow-md max-h-[280px]  overflow-y-auto overscroll-contain block no-scrollbar w-full">
          {data &&
            data.map((item) => (
              <li
                key={item.value}
                onClick={() => onChange(item)}
                className="p-2 hover:bg-accentPurple-light cursor-pointer">
                <span>{item.name}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
