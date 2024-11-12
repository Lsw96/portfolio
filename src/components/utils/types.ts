// Data Types

export interface SocialLink {
	id: number;
	icon: React.ReactNode;
	href: string;
	ariaLabel: string;
	tooltip: string;
	flow: 'top' | 'right' | 'bottom' | 'left';
}
export interface About {
	title: string;
	desc: string;
}
export interface Career {
	title: string;
	desc: {
		name: string;
		description: string;
		tags: string[];
	}[];
}
export interface Data {
	social: SocialLink[];
	about: About[];
	career: Career[];
}

// Progress Types
export interface ProgressRefType {
	current: HTMLDivElement | null;
}
export interface ProgressProps {
	target: React.RefObject<HTMLDivElement>;
}

// Marquee Types
export interface MarqueeComponentsProps {
	target: React.RefObject<HTMLDivElement>;
	title: string;
}

// Looping Word Types ===============================
export interface LoopingWordComponentsProps {
	wordListRef: React.RefObject<HTMLUListElement>;
	edgeElementRef: React.RefObject<HTMLDivElement>;
}

// Section01 Types ==================================
export interface Sec01Target {
	// 요소 참조type
	intro: React.RefObject<HTMLElement | null>;
	wordListRef: React.RefObject<HTMLUListElement | null>;
	edgeElementRef: React.RefObject<HTMLDivElement | null>;
}
export interface setDotsProps {
	setDots: React.Dispatch<React.SetStateAction<string>>;
}
export interface HandleCountProps {
	count: number;
	bodyRef: {
		current: HTMLBodyElement | null;
	};
	setDisplayCount: React.Dispatch<React.SetStateAction<number>>;
}

// Section02 Types ==================================
export interface Sec02Target {
	// 요소 참조type
	about?: React.RefObject<HTMLElement>;
}

// Section03 Types ==================================
export interface Sec03Target {
	// 요소 참조 ref
}

// Section04 Types ==================================
export interface Sec04Target {
	// 요소 참조 ref
}

// Section05 Types ==================================
export interface Sec05Target {
	// 요소 참조 ref
}

// Section06 Types ==================================
export interface Sec06Target {
	// 요소 참조 ref
}

// Section07 Types ==================================
export interface Sec07Target {
	// 요소 참조 ref
}
