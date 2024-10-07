import React, { useRef, useMemo, useEffect } from 'react';

// utils
import Animation from '@utils/animation';

// images
import Icon_react from '/images/sections/01/React_icon.svg';
import Icon_javascript from '/images/sections/01/Javascript_icon.svg';
import Icon_typescript from '/images/sections/01/Typescript_icon.svg';
import Icon_vane from '/images/sections/01/vane_icon.svg';
import Icon_arrow from '/images/sections/01/arrow_icon.svg';
import Icon_money from '/images/sections/01/money_icon.svg';
import Icon_dotLine from '/images/sections/01/dotLine_icon.svg';
import Icon_braket from '/images/sections/01/braket_icon.svg';

const Section01: React.FC = () => {
	// 요소 참조ref
	const intro = useRef<HTMLElement | null>(null);
	const titleTop = useRef<HTMLElement | null>(null);
	const titleMiddle = useRef<HTMLElement | null>(null);
	const titleBottom = useRef<HTMLElement | null>(null);
	const particleIcon = useRef<HTMLElement | null>(null);

	// 이미지 참조ref
	const react = useRef<HTMLImageElement | null>(null);
	const javascript = useRef<HTMLImageElement | null>(null);
	const typescript = useRef<HTMLImageElement | null>(null);
	const vane = useRef<HTMLImageElement | null>(null);
	const arrow = useRef<HTMLImageElement | null>(null);
	const money = useRef<HTMLImageElement | null>(null);
	const dotLine = useRef<HTMLImageElement | null>(null);
	const braketLeft = useRef<HTMLImageElement | null>(null);
	const braketRight = useRef<HTMLImageElement | null>(null);

	const refs = useMemo(
		() => ({
			intro,
			titleTop,
			titleMiddle,
			titleBottom,
			particleIcon,
			react,
			javascript,
			typescript,
			vane,
			arrow,
			money,
			dotLine,
			braketLeft,
			braketRight,
		}),
		[],
	);

	useEffect(() => {
		Animation.section01.scroll(refs);
	}, [refs]);

	return (
		<section id="intro" ref={refs.intro}>
			{/* 제목 */}
			<article className="title">
				<section className="top titleLayout" ref={refs.titleTop}>
					LEESEONGWOO
				</section>
				<section className="bottom titleLayout" ref={refs.titleBottom}>
					PORTFOLIO
				</section>
			</article>
			{/* 제목 END */}

			{/* 파티클 */}
			<article className="particleIcon" ref={refs.particleIcon}>
				<img ref={refs.react} src={Icon_react} alt="React 로고 이미지" />
				<img ref={refs.javascript} src={Icon_javascript} alt="Javascript 로고 이미지" />
				<img ref={refs.typescript} src={Icon_typescript} alt="Typescript 로고 이미지" />
				<img ref={refs.vane} src={Icon_vane} alt="vane 이미지" />
				<img ref={refs.arrow} src={Icon_arrow} alt="arrow 이미지" />
				<img ref={refs.money} src={Icon_money} alt="money 이미지" />
				<img ref={refs.dotLine} src={Icon_dotLine} alt="dotLine 이미지" />
				<div className="braketWrap">
					<img ref={refs.braketLeft} src={Icon_braket} alt="Braket 이미지" />
					<img ref={refs.braketRight} src={Icon_braket} alt="Braket 이미지" />
				</div>
			</article>
			{/* 파티클 END */}
		</section>
	);
};

export default Section01;
