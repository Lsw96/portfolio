import React from 'react';

// styles
import styles from '@scss/layout/layout.module.scss';

interface childrenProps {
	children: React.ReactNode;
}

const Layout: React.FC<childrenProps> = ({ children }) => {
	return (
		<>
			<main className={styles.container}>
                {children}
            </main>;
		</>
	);
};

export default Layout;
