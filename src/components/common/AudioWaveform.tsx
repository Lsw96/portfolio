import React, { useEffect, useRef } from 'react';

// types
import { WaveFormProps } from '@utils/types';

const AudioWaveform: React.FC<WaveFormProps> = ({
	audioElement,
	barWidth = 2,
	baseColor = '#00ff00', // 기본 색상
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const bufferLength = 256; // 버퍼 길이 설정
	const dataArray = new Uint8Array(bufferLength);

	const audioCtxRef = useRef<AudioContext | null>(null);
	const analyzerRef = useRef<AnalyserNode | null>(null);

	useEffect(() => {
		// AnalyserNode 생성
		const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)(); // 오디오 컨텍스트 생성
		const analyzer = audioCtx.createAnalyser(); // 오디오 분석기 생성하고 FFT(Fast Fourier Transform) 크기 설정
		analyzer.fftSize = bufferLength;
		audioCtxRef.current = audioCtx;
		analyzerRef.current = analyzer;

		if (audioElement) {
			const source = audioCtx.createMediaElementSource(audioElement);
			source.connect(analyzer);
			analyzer.connect(audioCtx.destination); // 오디오를 재생
			audioElement.play(); // 오디오 재생
			console.log('Audio source connection');
		} else {
			console.log('Audio source connection failed');
		}
		return () => {
			if (audioElement) {
				audioElement.pause();
				analyzer.disconnect();
				audioCtx.close();
				audioCtxRef.current = null; // AudioContext 초기화
				analyzerRef.current = null; // AnalyserNode 초기화
			}
		};
	}, [audioElement, bufferLength]);

	const animateBars = (canvasCtx: CanvasRenderingContext2D) => {
		if (!analyzerRef.current) return; // AnalyserNode가 유효한지 확인
		analyzerRef.current.getByteFrequencyData(dataArray); // 데이터 업데이트

		const canvasHeight = canvasRef.current?.height || 0; // 캔버스 높이 가져오기
		const canvasWidth = canvasRef.current?.width || 0; // 캔버스 너비 가져오기

		canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight); // 캔버스 초기화

		const centerY = canvasHeight / 2; // 캔버스 중앙 y 좌표

		for (let i = 0; i < bufferLength; i++) {
			// 막대기 높이를 계산
			const heightRatio = (dataArray[i] / 255) * centerY; // 파형 높이 계산 (중앙 기준)

			const minHeight = 0; // 최소 높이
			const actualHeight = Math.max(minHeight, heightRatio); // 최소 높이 보장

			canvasCtx.fillStyle = baseColor; // 단색 설정

			// y 위치 조정: 중앙에서 위로와 아래로 이동하도록 조정
			const y = centerY - actualHeight; // 중앙에서 위쪽
			const x = i * (barWidth + 2); // 초기 x 좌표 오프셋을 적용한 x 위치
			canvasCtx.fillRect(x, y, barWidth, actualHeight); // 위쪽 막대기 그리기
			canvasCtx.fillRect(x, centerY, barWidth, actualHeight); // 아래쪽 막대기 그리기
		}
	};

	const draw = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const canvasCtx = canvas.getContext('2d');

		const animate = () => {
			requestAnimationFrame(animate);
			if (canvasCtx) {
				animateBars(canvasCtx); // 막대기 애니메이션
			}
		};

		animate();
	};

	useEffect(() => {
		draw();
	}, [audioElement]);

	return <canvas ref={canvasRef} />; // 부모 크기에 맞게 설정
};

export default AudioWaveform;
