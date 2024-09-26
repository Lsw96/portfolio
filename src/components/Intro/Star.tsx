import React from 'react';

interface StarProps {
	id: number;
	size: number;
	left: number;
	top: number;
}

const Star: React.FC<StarProps> = ({ id, size, left, top }) => {
	return (
		<i
			key={id}
			style={{
                position: 'absolute',
                borderRadius: '25px',
                backgroundColor: '#f6f6f6',
				width: `${size}px`,
				height: `${size}px`,
				left: `${left}px`,
				top: `${top}px`,
			}}
		/>
	);
};

export default Star;
