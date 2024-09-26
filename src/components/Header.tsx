import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

// styles
import styles from '@scss/components/header.module.scss';

// images
import logo from '@images/header_logo.svg';

const Header: React.FC = () => {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const [hasAnimated, setHasAnimated] = useState(false);
	const headerRef = useRef<HTMLDivElement | null>(null);
	const location = useLocation();

	const navItems = ['intro', 'project', 'connect'];

	useEffect(() => {
		if (location.pathname === '/' && !hasAnimated) { // 메인에서만 실행
			setHasAnimated(true);
			if (headerRef.current) {
				gsap.from(headerRef.current, {
					opacity: 0,
					top: '-50%',
					duration: 1.4,
					ease: 'power2.out',
					delay: 1.6,
					onComplete: () => setHasAnimated(true),
				});
			}
		}
	}, [hasAnimated]);

	return (
		<header className={styles.header} ref={headerRef}>
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
