import React from 'react';

const Cheveron = ({ size = 24, stroke = '#111827' }: { size?: number; stroke?: string }) => {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 9L12 16L5 9"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cheveron;
