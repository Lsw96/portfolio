import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from '@scss/components/header.module.scss';

// images
import logo from '@images/header_logo.svg';

const Header: React.FC = () => {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	const navItems = ['intro', 'project', 'connect'];

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<img src={logo} className={styles.logo} alt="Web Logo" width={90} height={84} />
				<nav>
					<ul className={styles.navList}>
						{navItems.map(item => (
							<li
								key={item}
								className={hoveredItem === item ? styles.hovered : ''}
								onMouseEnter={() => setHoveredItem(item)}
								onMouseLeave={() => setHoveredItem(null)}
							>
								{/* <Link to={`/${item}`}> */}
								<Link to={item === 'intro' ? '/' : `/${item}`}>
									{item.charAt(0).toUpperCase() + item.slice(1)}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
