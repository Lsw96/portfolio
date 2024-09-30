import React, { useState, useRef } from 'react';

// images
import logo from '/images/header_logo.svg';

const Header: React.FC = () => {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const headerRef = useRef<HTMLDivElement | null>(null);
	const content1Ref = useRef<HTMLDivElement>(null);
	const content2Ref = useRef<HTMLDivElement>(null);
	const content3Ref = useRef<HTMLDivElement>(null);
	// 각 콘텐츠로 스크롤 이동하는 함수
	const handleContentClick = (index: number) => {
		switch (index) {
			case 0:
				content1Ref.current?.scrollIntoView();
				break;
			case 1:
				content2Ref.current?.scrollIntoView();
				break;
			case 2:
				content3Ref.current?.scrollIntoView();
				break;
			default:
				break;
		}
	};

	const navItems = ['intro', 'project', 'connect'];

	return (
		<header className="header" ref={headerRef} role="banner">
			<div className="headerInner">
				{/* 로고 */}
				<img src={logo} className="logo" alt="Web Logo" width={90} height={84} />
				{/* 로고 END */}

				{/* 메뉴 */}
				<nav role="navigation">
					<ul className="navList" role="list">
						{navItems.map((item, index) => (
							<li
								key={item}
								className={hoveredItem === item ? 'hovered' : ''}
								onMouseEnter={() => setHoveredItem(item)}
								onMouseLeave={() => setHoveredItem(null)}
								onClick={() => handleContentClick(index)}
								role="listitem"
							>
								{item}
							</li>
						))}
					</ul>
				</nav>
				{/* 메뉴 END */}
			</div>
		</header>
	);
};

export default Header;
