// Progress Types
export interface ProgressRefType {
	current: HTMLDivElement | null;
}

// Header Types
export interface AudioWaveformProps {
	audioElement: HTMLAudioElement | null;
}

// Section01 Types
export interface Sec01Target {
	// 요소 참조type
	intro: React.RefObject<HTMLElement>;
	titleTop: React.RefObject<HTMLElement>;
	titleMiddle: React.RefObject<HTMLElement>;
	titleBottom: React.RefObject<HTMLElement>;
	particleIcon: React.RefObject<HTMLElement>;

	// 이미지 참조type
	react: React.RefObject<HTMLImageElement>;
	javascript: React.RefObject<HTMLImageElement>;
	typescript: React.RefObject<HTMLImageElement>;
	vane: React.RefObject<HTMLImageElement>;
	arrow: React.RefObject<HTMLImageElement>;
	money: React.RefObject<HTMLImageElement>;
	dotLine: React.RefObject<HTMLImageElement>;
	braketLeft: React.RefObject<HTMLImageElement>;
	braketRight: React.RefObject<HTMLImageElement>;
}
// Section02 Types
// Section03 Types
// Section04 Types
// Section05 Types
// Section06 Types
// Section07 Types
