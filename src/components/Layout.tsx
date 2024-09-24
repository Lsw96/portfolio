import React from 'react';

// styles
import styles from '@scss/layout/layout.module.scss';

interface childrenProps {
	children: React.ReactNode;
}

const Layout: React.FC<childrenProps> = ({ children }) => {
	return (
		<>
			<div className={styles.container}>
                {children}
            </div>;
		</>
	);
};

export default Layout;
