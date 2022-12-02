import React from 'react';
import Cheveron from '../../ui/cheveron';
import Button from '../Button';

type data = {
  id: number;
  country: string;
};

export function FilterButton({ title, data }: { title: string; data?: data[] }) {
  const [active, setActive] = React.useState(false);
  const filterBlock = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={filterBlock} className="relative z-10 text-secondaryText">
      <Button
        className="px-4 py-2 bg-[#282a2e] rounded-lg flex items-center"
        onClick={() => setActive(!active)}>
        <span className="mr-2">{title}</span>
        <span className={` transition-all ${active && 'rotate-180'}`}>
          <Cheveron size={16} stroke="#fefefe" />
        </span>
      </Button>
      {active && (
        <ul className=" absolute mt-2 list-none rounded-lg bg-[#282a2e] shadow-md max-h-[280px] w-44 overflow-y-auto overscroll-contain block no-scrollbar">
          {data &&
            data.map((item) => (
              <li key={item.id} className="p-2 hover:bg-accentPurple-light cursor-pointer">
                <span>{item.country}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
