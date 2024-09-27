import React, { useEffect, useRef } from 'react';

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// styles
import styles from '@scss/components/progressBar.module.scss';

const ProgressBar: React.FC = () => {
	const ProgressRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (ProgressRef.current) {
			gsap.to(ProgressRef.current, {
				height: '100%',
				ease: 'none',
				scrollTrigger: { scrub: 0.3 },
			});
		}
	}, []);

	return (
		<article className={styles.progress}>
			<p>PORTFOLIO</p>
			<div className={styles.scrollBg}>
				<div className={styles.scrollProgress} ref={ProgressRef}></div>
			</div>
			<p>2024.10.27</p>
		</article>
	);
};

export default ProgressBar;
