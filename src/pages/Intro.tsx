import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

// redux
import { useDispatch, useSelector } from 'react-redux';
import { initializeStars, Star } from '@store/slices/starsSlice';

// components
import Stars from '@components/Star';

// utils
import { getCenterArea, createStar } from '@utils/starArea';

// styles
import styles from '@scss/components/intro.module.scss';

const Intro: React.FC = () => {
	const intro1Ref = useRef<HTMLDivElement | null>(null);
	const dispatch = useDispatch();
	const stars = useSelector((state: { stars: { stars: Star[] } }) => state.stars.stars);

	// 화면 스크롤을 다음영역으로 이동시키는 함수
	const handleScrollToIntro = () => {
		if (intro1Ref.current) {
			gsap.to(window, {
				scrollTo: { y: intro1Ref.current.offsetTop, autoKill: false },
				duration: 1.425,
				ease: 'power1.Out',
				delay: 0.15,
			});
		}
	};

	// 별을 생성하는 함수 (화면 중앙 영역을 피해 생성)
	const generateStars = () => {
		const centerArea = getCenterArea(); // 중앙 영역 계산
		const generatedStars = Array.from({ length: 14 }, (_, i) => createStar(i, centerArea));
		dispatch(initializeStars(generatedStars)); // Redux에 저장
	};

	// 컴포넌트 마운트 시 별 생성 및 리사이즈 이벤트 등록
	useEffect(() => {
		generateStars();
		const handleResize = () => generateStars(); // 화면 크기 변경 시 별 재생성
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 리스너 제거
	}, [dispatch]);

	return (
		<>
			<main className={styles.visual}>
				{/* 별 렌더링 */}
				{stars.map(star => (
					<Stars key={star.id} {...star} />
				))}
				<h1 className={styles.title}>
					<span
						className={`${styles.largeText} ${styles.glitch}`}
						data-glitch="PORTFOLIO"
					>
						PORTFOLIO
					</span>
					<span
						className={`${styles.smallText} ${styles.glitch}`}
						data-glitch="LEESEONGWOO"
					>
						LEESEONGWOO
					</span>
				</h1>
				<span
					className={styles.contentText}
					data-wave="인터랙티브한 웹 디자인에 관심이 많은 프런트엔드 개발자"
				>
					인터랙티브한 웹 디자인에 관심이 많은 프런트엔드 개발자
				</span>
				<button className={styles.startBtn} onClick={handleScrollToIntro}>
					LET ME INTRODUCE MYSELF
				</button>
			</main>

			<div className={styles.box} ref={intro1Ref}>
				<p className={styles.title}>Intro1</p>
			</div>
			<div className={styles.box}>
				<p className={styles.title}>Intro2</p>
			</div>
		</>
	);
};

export default Intro;
