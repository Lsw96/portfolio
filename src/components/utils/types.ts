// Progress Types
export interface ProgressRefType {
	current: HTMLDivElement | null;
}

// Header Types
export interface AudioWaveformProps {
	audioElement: HTMLAudioElement | null;
}
export interface WaveFormProps {
	audioElement: HTMLAudioElement | null;
	canvasHeight?: number;
	barWidth?: number;
	baseColor?: string;
}

// Section01 Types ==================================
export interface Sec01Target {
	// 요소 참조type
	intro: React.RefObject<HTMLElement>;
	titleTop: React.RefObject<HTMLElement>;
	titleMiddle: React.RefObject<HTMLElement>;
	titleBottom: React.RefObject<HTMLElement>;

	// 이미지 참조type
	react: React.RefObject<HTMLImageElement>;
	javascript: React.RefObject<HTMLImageElement>;
	typescript: React.RefObject<HTMLImageElement>;
	vane: React.RefObject<HTMLImageElement>;
	arrow: React.RefObject<HTMLImageElement>;
	money: React.RefObject<HTMLImageElement>;
	dotLine: React.RefObject<HTMLImageElement>;
	braket: React.RefObject<HTMLImageElement>;
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
