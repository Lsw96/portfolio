import { useRef, useEffect, useMemo } from 'react';

// utils
import Animation from '@utils/animation';

// components
import MarqueeComponents from '@components/common/MarqueeComponents';

const Header: React.FC = () => {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const ProgressRef = useRef<HTMLDivElement | null>(null);
	const MarqueeRef = useRef<HTMLDivElement | null>(null);

	const refs = useMemo(
		() => ({
			header: headerRef,
			marquee: MarqueeRef,
		}),
		[],
	);

	useEffect(() => {
		Animation.layout.header(refs.header);
	}, [refs]);

	const handleContentClick = (id: string) => {
		document.getElementById(id)?.scrollIntoView();
	};

	const navItems = [
		{ id: 'introduce', label: '소개' },
		{ id: 'skill', label: '기술' },
		{ id: 'project', label: '작업물' },
		{ id: 'connect', label: '연락처' },
	];

	return (
		<header className="header" ref={headerRef} role="banner">
			{/* 메뉴 */}
			<nav role="navigation">
				<ul className="navList" role="list">
					{navItems.map(item => (
						<li className="listItem" key={item.id}>
							<a className="navItem" onClick={() => handleContentClick(item.id)}>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
			{/* 메뉴 END */}

			{/* 페이지 진행율 */}
			<div className="progress">
				<div className="scrollBg">
					<div className="scrollProgress" ref={ProgressRef}></div>
				</div>
			</div>
			{/* 페이지 진행율 END */}

			{/* 무한 텍스트 */}
			<div className="headerInner">
				<section className="marquee">
					<MarqueeComponents
						target={refs.marquee}
						title={
							'THIS PAGE MADE BY REACT | GSAP | SCSS, GOOD LUCK TO ALL DEVELOPERS !'
						}
					/>
				</section>
			</div>
			{/* 무한 텍스트 END */}
		</header>
	);
};

export default Header;
