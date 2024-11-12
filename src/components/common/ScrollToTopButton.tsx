import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import useWindowSize from '@hooks/useWindowSize';

const ScrollToTopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { width } = useWindowSize();
	const tabletBreakpoint = 768;

	// 스크롤 위치에 따른 버튼 표시 여부 조정
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	// 페이지 최상단으로 스크롤
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			className={`scroll-to-top ${isVisible ? 'visible' : ''} ${
				width < tabletBreakpoint ? 'top' : 'left'
			}`}
			onClick={scrollToTop}
			data-tooltip="처음으로"
			aria-label="처음으로"
		>
			<FaArrowUp />
		</button>
	);
};

export default ScrollToTopButton;
