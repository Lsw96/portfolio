import gsap from 'gsap';
import { ScrollTrigger, MotionPathPlugin, CSSPlugin } from 'gsap/all';

import {
	MarqueeComponentsProps,
	ProgressProps,
	setDotsProps,
	HandleCountProps,
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
	// 로딩 애니메이션
	static loading = {
		dots: (setDots: setDotsProps['setDots']) => {
			const interval = setInterval(() => {
				setDots(prev => {
					if (prev === '') return ' ·';
					if (prev === ' ·') return ' · ·';
					if (prev === ' · ·') return ' · · ·';
					return '';
				});
			}, 500);

			return interval;
		},

		handleCount: ({ count, bodyRef, setDisplayCount }: HandleCountProps) => {
			// 10단위로 증가하는 카운트
			const targetCount = count >= 98 ? 100 : Math.floor(count / 10) * 10;
			setDisplayCount(targetCount);

			if (count >= 98) {
				const timeout = setTimeout(() => {
					bodyRef.current?.classList.remove('no-scroll');
				}, 600);
				return timeout;
			} else if (count >= 1) {
				bodyRef.current?.classList.add('no-scroll');
			}
		},
	};

	// 기본 레이아웃
	static layout = {
		header: (target: MarqueeComponentsProps['target']) => {
			if (target.current) {
				gsap.from(target.current, {
					y: -100,
					opacity: 0,
					duration: 1,
					delay: 2,
				});
			}

			const sections: any = gsap.utils.toArray('.marquee .content');

			for (let i = 0; i <= sections.length - 1; i++) {
				gsap.to(sections[i], {
					xPercent: -100,
					repeat: -1,
					duration: 68,
					ease: 'linear',
					modifiers: {
						xPercent: gsap.utils.wrap(-100, 0),
					},
				});
			}

			const headerProgress = document.querySelector('.header .scrollProgress');
			if (headerProgress) {
				gsap.to(headerProgress, {
					width: '100%',
					ease: 'none',
					scrollTrigger: {
						scrub: 0.3,
					},
				});
			}
		},

		aside: (): void => {
			// main 애니메이션 로직
		},

		main: (): void => {
			// main 애니메이션 로직
		},

		footer: (): void => {
			// footer 애니메이션 로직
		},
	};

	// Section 01 : Intro
	static section01 = {
		scroll: ({ wordListRef, edgeElementRef }: Sec01Target) => {
			if (!wordListRef.current || !edgeElementRef.current) return;

			// looping-words 초기 상태와 애니메이션 설정
			gsap.set('.looping-words', {
				scale: 0,
				opacity: 0,
			});

			gsap.to('.looping-words', {
				scale: 1,
				opacity: 1,
				duration: 0.8,
				delay: 1.5,
				ease: 'back.out(1.7)',
			});

			// arrow-box 초기 상태 설정
			gsap.set('.arrow-box', {
				opacity: 0,
				y: 20,
			});

			// arrow-box 등장 애니메이션
			gsap.to('.arrow-box', {
				opacity: 1,
				y: 0,
				duration: 0.8,
				delay: 2.4,
				ease: 'power2.out',
			});

			// arrow-box 스크롤 애니메이션
			gsap.to('.arrow-box', {
				scrollTrigger: {
					trigger: '#introduce',
					start: 'top 80%',
					end: 'top 20%',
					scrub: true,
				},
				y: 100,
			});

			const wordList = wordListRef.current;
			const words = Array.from(wordList.children) as HTMLElement[];
			const totalWords = words.length;
			const wordHeight = 100 / totalWords;
			let currentIndex = 0;

			// Edge 요소의 너비 업데이트 함수
			function updateEdgeWidth() {
				const centerIndex = (currentIndex + 1) % totalWords;
				const centerWord = words[centerIndex];
				const centerWordWidth = centerWord.getBoundingClientRect().width;
				const listWidth = wordList.getBoundingClientRect().width;
				const percentageWidth = (centerWordWidth / listWidth) * 100;

				gsap.to(edgeElementRef.current, {
					width: `${percentageWidth}%`,
					duration: 0.5,
					ease: 'Expo.easeOut',
				});
			}

			// 단어 스타일 업데이트 함수
			function updateWordStyles() {
				words.forEach((word, index) => {
					if (index === (currentIndex + 1) % totalWords) {
						word.classList.add('is--primary');
						word.classList.remove('is--gray');
					} else {
						word.classList.add('is--gray');
						word.classList.remove('is--primary');
					}
				});
			}

			// 단어 이동 애니메이션 함수
			function moveWords() {
				currentIndex++;
				updateWordStyles();

				gsap.to(wordList, {
					yPercent: -wordHeight * currentIndex,
					duration: 1.2,
					ease: 'elastic.out(1, 0.85)',
					onStart: updateEdgeWidth,
					onComplete: () => {
						if (currentIndex >= totalWords - 3) {
							wordList.appendChild(wordList.children[0]);
							currentIndex--;
							gsap.set(wordList, { yPercent: -wordHeight * currentIndex });
							words.push(words.shift()!); // 배열 재배치
						}
					},
				});
			}

			// 애니메이션 초기화
			updateEdgeWidth();
			updateWordStyles();
			gsap.timeline({ repeat: -1, delay: 1 })
				.call(moveWords)
				.to({}, { duration: 2 })
				.repeat(-1);
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
