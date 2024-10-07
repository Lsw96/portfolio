import gsap from 'gsap';
import { ScrollTrigger, MotionPathPlugin, CSSPlugin } from 'gsap/all';

import {
	Sec01Target,
	Sec02Target,
	Sec03Target,
	Sec04Target,
	Sec05Target,
	Sec06Target,
	Sec07Target,
} from './types';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSPlugin);

class Animation {
	// 기본 레이아웃
	static layout = {
		header: (audio: HTMLAudioElement, audioIcon: HTMLImageElement) => {
			if (audio.paused) {
				audio.play();
				audioIcon.src = '/audio/VolumeOn.gif';
				console.log('Audio Playing');
			} else {
				audio.pause();
				audio.currentTime = 0;
				audioIcon.src = '/audio/VolumeOff.gif';
				console.log('Audio Stopped');
			}
		},

		main: (): void => {
			// main 애니메이션 로직
		},

		footer: (): void => {
			// footer 애니메이션 로직
		},

		progress: (target: React.RefObject<HTMLDivElement>) => {
			if (target.current) {
				gsap.to(target.current, {
					height: '100%',
					ease: 'none',
					scrollTrigger: {
						scrub: 0.3,
					},
				});
			}
		},
	};

	// Section 01 : Intro
	static section01 = {
		scroll: (target: Sec01Target & Sec02Target): void => {
			let trigger = target.about?.current ?? null; // 나타나면 실행할 섹션
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
			const titlePosBottom = target.titleBottom.current ? [target.titleBottom.current] : [];

			// 텍스트 분리 및 삽입
			const splitText = (element: HTMLElement | null): HTMLElement[] => {
				if (!element) return [];
				const text = element.textContent || '';
				element.textContent = '';

				const spans: HTMLElement[] = []; // h2 태그를 저장할 배열생성

				text.split('').forEach(char => {
					const span = document.createElement('h2');
					span.textContent = char;
					element.appendChild(span);
					spans.push(span); // 생성된 span을 배열에 저장
				});

				return spans; // 생성된 h2 태그 배열 반환
			};

			const topTitleH2s = titlePosTop.map(element => splitText(element)).flat();
			const bottomTitleH2s = titlePosBottom.map(element => splitText(element)).flat();

			gsap.to(topTitleH2s.concat(bottomTitleH2s), {
				y: -350,
				opacity: 0,
				filter: 'blur(20px)',
				stagger: 0.01,
				scrollTrigger: {
					trigger: target.intro.current,
					start: 'top 0%',
					end: 'bottom 40%',
					scrub: true,
				},
			});

			// gsap.to(titlePosBottom, {
			// 	opacity: 0,
			// 	scale: 0.8,
			// 	filter: 'blur(5px)',
			// 	ease: 'power1.out',
			// 	scrollTrigger: {
			// 		trigger: target.intro.current,
			// 		start: 'top top',
			// 		end: 'bottom 5%',
			// 		scrub: true,
			// 	},
			// });
		},
	};

	// Section 02 :
	static section02 = {
		scroll: (target: Sec02Target): void => {
			// 애니메이션 로직
		},
	};
	// Section 03 :
	static section03 = {
		scroll: (target: Sec03Target): void => {
			// 애니메이션 로직
		},
	};
	// Section 04 :
	static section04 = {
		scroll: (target: Sec04Target): void => {
			// 애니메이션 로직
		},
	};
	// Section 05 :
	static section05 = {
		scroll: (target: Sec05Target): void => {
			// 애니메이션 로직
		},
	};
	// Section 06 :
	static section06 = {
		scroll: (target: Sec06Target): void => {
			// 애니메이션 로직
		},
	};
	// Section 07 :
	static section07 = {
		scroll: (target: Sec07Target): void => {
			// 애니메이션 로직
		},
	};
}

export default Animation;
