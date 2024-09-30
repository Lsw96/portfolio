import React, { useEffect, useRef } from 'react';

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ProgressComponents: React.FC = () => {
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
		<article className='progress'>
			<p>PORTFOLIO</p>
			<div className='scrollBg'>
				<div className='scrollProgress' ref={ProgressRef}></div>
			</div>
			<p>2024.10.27</p>
		</article>
	);
};

export default ProgressComponents;
