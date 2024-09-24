import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleHeader } from '@store/slices/headerSlice';

// styles
import styles from '@scss/components/header.module.scss';

// images
import logo from '@images/header_logo.svg';

const Header: React.FC = () => {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const isVisible = useSelector((state: any) => state.header.isVisible); // 헤더 가시성 상태
	const dispatch = useDispatch();

	const navItems = ['intro', 'project', 'connect'];

	return isVisible ? (
		<header className={styles.header}>
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
		</header>
	) : null;
};

export default Header;
