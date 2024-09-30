import gsap from 'gsap';
import { ScrollTrigger, MotionPathPlugin, CSSPlugin } from 'gsap/all';
// import Lenis from 'lenis';

import { Sec01Target } from './types';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSPlugin);

class Animation {
	// 기본 레이아웃
	static layout = {
		header: (target: HTMLElement): void => {
			// header 애니메이션 로직
		},

		main: (): void => {
			// main 애니메이션 로직
		},

		footer: (): void => {
			// footer 애니메이션 로직
		},

		progress: (): void => {
			// progress 애니메이션 로직
		},
	};

	// Section 01 : Intro
	static section01 = {
		scroll: (target: Sec01Target): void => {
			let trigger = target.particleIcon.current; // 나타나면 실행할 섹션

			// 돌려 사용할 스크롤 트리거 함수
			const scrollTrigger = (target: HTMLElement | null, option: gsap.TweenVars): void => {
				if (target) {
					ScrollTrigger.create({
						trigger: trigger,
						scrub: 1,
						animation: gsap.to(target, option),
					});
				}
			};

			scrollTrigger(target.react.current, {
				y: '1200%',
				scale: 5,
				rotation: 1500,
				filter: 'blur(50px)',
				opacity: 0,
			});
			scrollTrigger(target.javascript.current, {
				x: '-1300%',
				y: '-1200%',
				scale: 5,
				rotation: 1500,
				filter: 'blur(50px)',
			});
			scrollTrigger(target.typescript.current, {
				x: '1300%',
				y: '-1200%',
				scale: 5,
				rotation: 1500,
				filter: 'blur(50px)',
			});
			scrollTrigger(target.vane.current, {
				x: '-1300%',
				y: '-1200%',
				scale: 5,
				rotation: 500,
				filter: 'blur(30px)',
			});
			scrollTrigger(target.arrow.current, {
				x: '1300%',
				y: '-1200%',
				scale: 5,
				rotation: 500,
				filter: 'blur(30px)',
			});
			scrollTrigger(target.money.current, {
				x: '-1300%',
				y: '-1200%',
				scale: 5,
				rotation: 500,
				filter: 'blur(30px)',
			});
			scrollTrigger(target.dotLine.current, {
				x: '1300%',
				y: '-1200%',
				scale: 5,
				rotation: 500,
				filter: 'blur(30px)',
			});
			scrollTrigger(target.braketLeft.current, {
				x: '-1300%',
				y: '-1200%',
				scale: 5,
				rotation: 500,
				filter: 'blur(30px)',
			});
			scrollTrigger(target.braketRight.current, {
				x: '1300%',
				y: '-1200%',
				scale: 5,
				rotation: 500,
				filter: 'blur(30px)',
			});

			// 타이틀
			const titlePosTop = target.titleTop.current ? [target.titleTop.current] : [];
			const titlePosMiddle = target.titleMiddle.current ? [target.titleMiddle.current] : [];

			// 텍스트 분리 및 삽입
			const splitText = (element: HTMLElement | null) => {
				if (!element) return;
				const text = element.textContent || '';
				element.textContent = '';

				text.split('').forEach(char => {
					const span = document.createElement('h2');
					span.textContent = char;
					element.appendChild(span);
				});
			};
			titlePosTop.forEach(element => splitText(element));
			titlePosMiddle.forEach(element => splitText(element));

			gsap.fromTo(
				'.intro .title .top > h2, .intro .title .middle > h2',
				{
					// y: 0,
					// opacity: 1,
					// transform: 50
				},
				{
					y: -500,
					opacity: 0,
					filter: 'blur(20px)',
					stagger: 0.01,
					scrollTrigger: {
						trigger: target.intro.current,
						start: 'top 0%',
						end: 'bottom 20%',
						scrub: true,
					},
				},
			);
		},
	};

	// Section 02 :
	static section02 = {};
	// Section 03 :
	static section03 = {};
	// Section 04 :
	static section04 = {};
	// Section 05 :
	static section05 = {};
	// Section 06 :
	static section06 = {};
	// Section 07 :
	static section07 = {};
}

export default Animation;
