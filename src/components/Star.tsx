import React from 'react';

// styles
import styles from '@scss/components/intro.module.scss';

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
			className={styles.star}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				left: `${left}px`,
				top: `${top}px`,
			}}
		/>
	);
};

export default Star;
