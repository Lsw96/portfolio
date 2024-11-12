import React, { useRef, useMemo, useEffect } from 'react';

// utils
import Animation from '@utils/animation';

// components
import LoopingWordComponents from '@components/common/LoopingWordComponents';

// images
import logo from '/images/header_logo.svg';

const Section01: React.FC = () => {
	const intro = useRef<HTMLElement | null>(null);
	const wordListRef = useRef<HTMLUListElement | null>(null);
	const edgeElementRef = useRef<HTMLDivElement | null>(null);

	const refs = useMemo(
		() => ({
			intro,
			wordListRef,
			edgeElementRef,
		}),
		[],
	);

	const Arrow = useMemo(
		() => (
			<div className="arrow-box">
				<div className="down-arrow">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
			</div>
		),
		[],
	);

	useEffect(() => {
		Animation.section01.scroll(refs);
	}, [refs]);

	return (
		<section id="intro" ref={refs.intro}>
			<LoopingWordComponents
				wordListRef={refs.wordListRef}
				edgeElementRef={refs.edgeElementRef}
			/>
			<img src={logo} className="logoImg" alt="Web Logo" />
			{Arrow}
		</section>
	);
};

export default Section01;
