import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Animation from './utils/animation.tsx';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
	const boxRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
        if (boxRef.current) {
            Animation.section01.scroll(boxRef.current);
        }
	}, []);

	return (
		<section ref={boxRef}>
			<h2>Scroll down to see the animation</h2>
		</section>
	);
};

export default AnimatedSection;
