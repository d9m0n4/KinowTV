import React from 'react';

export const Favorites = ({
	size = 24,
	stroke = '#111827',
}: {
	size?: number;
	stroke?: string;
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 16 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V19L8 15.5L1 19V3Z"
				stroke={stroke}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
