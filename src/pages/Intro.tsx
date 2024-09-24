import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// styles
import styles from '@scss/components/intro.module.scss';

gsap.registerPlugin(ScrollToPlugin);

const Intro: React.FC = () => {
	const intro1Ref = useRef<HTMLDivElement | null>(null);

	const handleScrollToIntro1 = () => {
		if (intro1Ref.current) {
			gsap.to(window, {
				scrollTo: { y: intro1Ref.current.offsetTop, autoKill: false },
				duration: 1.425,
				ease: 'power1.Out',
				delay: 0.15,
			});
		}
	};

	return (
		<>
			<main className={styles.visual}>
				<h1 className={styles.title}>
					<span className={`${styles.largeText} ${styles.glitch}`} data-glitch="PORTFOLIO">
						PORTFOLIO
					</span>
					<span className={`${styles.smallText} ${styles.glitch}`} data-glitch="LEESEONGWOO">
						LEESEONGWOO
					</span>
				</h1>
				<footer>
					<span>© 2024 LEESEONGWOO. All rights reserved.</span>
				</footer>
				<button className={styles.startBtn} onClick={handleScrollToIntro1}>
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
