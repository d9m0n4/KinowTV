import React from 'react';
import { Link } from 'react-router-dom';
import PersonAvatar from '../PersonAvatar';

const PersonSlide = ({
  personId,
  personImg,
  personName,
}: {
  personId: number;
  personImg: string;
  personName: string;
}) => {
  return (
    <>
      <Link to={`/person/${personId}`} className="flex items-center justify-between flex-col">
        <div className="relative w-32 h-32 overflow-hidden rounded-full">
          <PersonAvatar src={personImg} alt={personName} />
        </div>
        <div className="text-ellipsis overflow-hidden whitespace-nowrap">
          <span className="text-sm mt-2 font-normal"> {personName}</span>
        </div>
      </Link>
    </>
  );
};

export default PersonSlide;
