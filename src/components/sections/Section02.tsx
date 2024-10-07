import React, { useRef, useMemo, useEffect } from 'react';

// utils
import Animation from '@utils/animation';

const Section02: React.FC = () => {
	// 요소 참조ref
	const about = useRef<HTMLElement | null>(null);

	const refs = useMemo(
		() => ({
			about,
		}),
		[],
	);

	useEffect(() => {
		Animation.section02.scroll(refs);
	}, [refs]);

	return (
		<section id="about" className="container" ref={refs.about}>
			<p className="sec02a">Section02</p>
		</section>
	);
};

export default Section02;
