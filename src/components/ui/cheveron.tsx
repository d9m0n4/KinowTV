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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Cheveron;
