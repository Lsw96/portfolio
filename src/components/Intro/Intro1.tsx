import React, { useRef, useEffect, useCallback, forwardRef } from 'react';

// gsap
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// redux
import { useDispatch, useSelector } from 'react-redux';
import { initializeStars, Star } from '@store/slices/starsSlice';

// utils
import { getMainArea, getCenterArea, createStar } from '@utils/starArea';
import { debounce } from '@utils/debounce';

// components
import Stars from '@components/Intro/Star';

// styles
import styles from '@scss/components/Intro/intro1.module.scss';

const useAnimationRefs = () => {
	return {
		section: useRef<HTMLDivElement | null>(null),
		textWrap: useRef<HTMLDivElement | null>(null),
		iconWrap: useRef<HTMLDivElement | null>(null),
		braketWrap: useRef<HTMLDivElement | null>(null),
		rotate: useRef<HTMLDivElement | null>(null),
		intro1: useRef<HTMLDivElement | null>(null),
	};
};

// 별 생성 로직을 관리할 커스텀 훅
const useInitializeStars = () => {
	const dispatch = useDispatch();

	// 별 생성 함수
	const generateStars = useCallback(() => {
		const mainArea = getMainArea();
		const centerArea = getCenterArea(mainArea);
		const generatedStars = Array.from({ length: 14 }, (_, i) =>
			createStar(i, mainArea, centerArea),
		);
		dispatch(initializeStars(generatedStars));
	}, [dispatch]);

	// 컴포넌트 마운트 시 별 생성 및 리사이즈 이벤트 호출
	useEffect(() => {
		generateStars();
		const handleResize = debounce(generateStars, 200);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [generateStars]);
};

const Intro1 = forwardRef<
	HTMLDivElement,
	React.PropsWithChildren<{ intro2Ref?: React.Ref<HTMLDivElement> }>
>((props, ref) => {
	const { section, textWrap, iconWrap, braketWrap, rotate, intro1 } = useAnimationRefs();
	const stars = useSelector((state: { stars: { stars: Star[] } }) => state.stars.stars);
	useInitializeStars();

	// BUTTON | 클릭 시 화면 스크롤을 다음 영역으로 이동
	const handleScrollToIntro = () => {
		if (props.intro2Ref && 'current' in props.intro2Ref) {
			gsap.to(window, {
				scrollTo: { y: props.intro2Ref.current?.offsetTop, autoKill: false },
				duration: 0.69,
				ease: 'ease',
				delay: 0.14,
			});
		}
	};

	// GSAP 메인태그 애니메이션 | FadeOut 설정
	useEffect(() => {
		if (section.current && textWrap.current && iconWrap.current) {
			gsap.to([textWrap.current, iconWrap.current], {
				autoAlpha: 0,
				scrollTrigger: {
					trigger: section.current,
					start: 'top top',
					end: '+=650',
					scrub: true,
				},
			});

			gsap.from(braketWrap.current, {
				left: '-5%',
				opacity: 0,
				delay: 1.28,
				duration: 0.8,
				ease: 'back.out',
			});

			gsap.from(rotate.current, {
				right: '10%',
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
			<main className={styles.visual} ref={section}>
				{stars.map(star => (
					<Stars key={star.id} {...star} />
				))}

				<div className={styles.iconWrap} ref={iconWrap}>
					<i className={`${styles.sprite_i} ${styles.typescript}`} />
					<i className={`${styles.sprite_i} ${styles.javascript}`} />
					<i className={`${styles.sprite_i} ${styles.react}`} />
					<i className={`${styles.sprite_ic} ${styles.money}`} />
					<i className={`${styles.sprite_ic} ${styles.rotate}`} ref={rotate} />
					<i className={styles.line} />
					<i className={`${styles.arrow} ${styles.arrowLeft}`} />
					<i className={`${styles.arrow} ${styles.arrowRight}`} />
					<div className={styles.braketWrap} ref={braketWrap}>
						<i className={`${styles.braket} ${styles.braketLeft}`} />
						<i className={`${styles.braket} ${styles.braketRight}`} />
					</div>
				</div>

				<section className={styles.textWrap} ref={textWrap}>
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
		</>
	);
});

export default Intro1;
