import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

// redux
import { useDispatch, useSelector } from 'react-redux';
import { initializeStars, Star } from '@store/slices/starsSlice';

// components
import Stars from '@components/Star';

// utils
import { getMainArea, getCenterArea, createStar } from '@utils/starArea';
import { debounce } from '@utils/debounce';

// styles
import styles from '@scss/components/intro.module.scss';

const Intro: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const textWrapRef = useRef<HTMLDivElement | null>(null);
	const iconWrapRef = useRef<HTMLDivElement | null>(null);
	const braketWrapRef = useRef<HTMLDivElement | null>(null);
	const intro1Ref = useRef<HTMLDivElement | null>(null);
	const rotateRef = useRef<HTMLDivElement | null>(null);
	const stars = useSelector((state: { stars: { stars: Star[] } }) => state.stars.stars);
	const dispatch = useDispatch();

	// 화면 스크롤을 다음영역으로 이동시키는 함수
	const handleScrollToIntro = () => {
		if (intro1Ref.current) {
			gsap.to(window, {
				scrollTo: { y: intro1Ref.current.offsetTop, autoKill: false },
				duration: 1.25,
				ease: 'ease',
				delay: 0.15,
			});
		}
	};

	// 별을 생성하는 함수 (화면 중앙 영역을 피해 생성)
	const generateStars = () => {
		const mainArea = getMainArea(); // main 태그의 영역 계산
		const centerArea = getCenterArea(mainArea); // 중앙 영역 계산
		const generatedStars = Array.from({ length: 14 }, (_, i) =>
			createStar(i, mainArea, centerArea),
		);
		dispatch(initializeStars(generatedStars)); // Redux에 저장
	};
	// 컴포넌트 마운트 시 별 생성 및 리사이즈 이벤트 등록
	useEffect(() => {
		generateStars();

		const handleResize = debounce(() => {
			generateStars(); // 화면 크기 변경 시 별 재생성
		}, 200); // 200ms로 디바운스 설정

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 리스너 제거
	}, [dispatch]);

	// GSAP 메인태그 애니메이션 | FadeOut 설정
	useEffect(() => {
		if (sectionRef.current && textWrapRef.current && iconWrapRef.current) {
			gsap.to([textWrapRef.current, iconWrapRef.current], {
				autoAlpha: 0,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top top',
					end: '+=650',
					scrub: true,
				},
			});
			gsap.from(braketWrapRef.current, {
				left: -50,
				opacity: 0,
				delay: 1.28,
				duration: 0.8,
				ease: 'back.out',
			});
			gsap.from(rotateRef.current, {
				right: 186,
				opacity: 0,
				delay: 1.6,
				duration: 0.68,
				ease: 'back.out',
			});
		}
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	return (
		<>
			<main className={styles.visual} ref={sectionRef}>
				{stars.map(star => (
					<Stars key={star.id} {...star} />
				))}

				<div className={styles.iconWrap} ref={iconWrapRef}>
					<i className={`${styles.sprite_i} ${styles.typescript}`} />
					<i className={`${styles.sprite_i} ${styles.javascript}`} />
					<i className={`${styles.sprite_i} ${styles.react}`} />
					<i className={`${styles.sprite_ic} ${styles.money}`} />
					<i className={`${styles.sprite_ic} ${styles.rotate}`} ref={rotateRef} />
					<i className={styles.line} />
					<i className={`${styles.arrow} ${styles.arrowLeft}`} />
					<i className={`${styles.arrow} ${styles.arrowRight}`} />
					<div className={styles.braketWrap} ref={braketWrapRef}>
						<i className={`${styles.braket} ${styles.braketLeft}`} />
						<i className={`${styles.braket} ${styles.braketRight}`} />
					</div>
				</div>

				<section className={styles.textWrap} ref={textWrapRef}>
					<h1 className={styles.title}>
						<span
							className={`${styles.smallText} ${styles.glitch}`}
							data-glitch="LEESEONGWOO"
						>
							LEESEONGWOO
						</span>
						<span
							className={`${styles.largeText} ${styles.glitch}`}
							data-glitch="PORTFOLIO"
						>
							PORTFOLIO
						</span>
						<span
							className={styles.contentText}
							data-wave="인터랙티브한 웹 디자인에 관심이 많은 프런트엔드 개발자"
						>
							인터랙티브한 웹 디자인에 관심이 많은 프런트엔드 개발자
						</span>
					</h1>

					<button className={styles.startBtn} onClick={handleScrollToIntro}>
						LET ME INTRODUCE MYSELF
					</button>
				</section>
			</main>

			<div className={styles.box} ref={intro1Ref}>
				<p>Intro1</p>
			</div>
			<div className={styles.box}>
				<p>Intro2</p>
			</div>
		</>
	);
};

export default Intro;
