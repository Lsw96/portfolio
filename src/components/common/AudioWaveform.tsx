import React, { useEffect, useRef, useState } from 'react';

// types
import { WaveFormProps } from '@utils/types';

// hook
import useSize from '@hooks/useSize';

const AudioWaveform: React.FC<WaveFormProps> = ({
	audioElement,
	canvasHeight = 32,
	barWidth = 2,
	baseColor = '#00ff00',
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [viewportWidth] = useSize();
	const bufferLength = 1024; // 버퍼 길이 설정
	const dataArray = new Uint8Array(bufferLength);

	const audioCtxRef = useRef<AudioContext | null>(null);
	const analyzerRef = useRef<AnalyserNode | null>(null);

	// AnalyserNode 생성
	const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)(); // 오디오 컨텍스트 생성
	const analyzer = audioCtx.createAnalyser(); // 오디오 분석기 생성하고 FFT(Fast Fourier Transform) 크기 설정
	analyzer.fftSize = bufferLength;
	audioCtxRef.current = audioCtx;
	analyzerRef.current = analyzer;

	useEffect(() => {
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
	}, [audioElement]);

	const animateBars = (canvasCtx: CanvasRenderingContext2D) => {
		if (!analyzerRef.current) return; // AnalyserNode가 유효한지 확인
		analyzer.getByteFrequencyData(dataArray); // 데이터 업데이트
		canvasCtx.fillStyle = 'transparent'; // 배경색 설정
		canvasCtx.fillRect(0, 0, viewportWidth, canvasHeight);

		const barHeight = canvasHeight; // 막대기 최대 높이
		let x = 0;

		for (let i = 0; i < bufferLength; i++) {
			const midIndex = bufferLength / 2; // 중앙 인덱스
			const distanceFromMid = Math.abs(i - midIndex); // 중앙에서의 거리
			const maxDistance = midIndex; // 최대 거리
			const heightRatio =
				((maxDistance - distanceFromMid) / maxDistance) *
				(dataArray[i] / 255) *
				(barHeight * 3); // 파형 높이 계산

			const brightness = (dataArray[i] / 255) * 0.5; // 밝기 조절 (0.0 ~ 0.5)
			const color = `rgba(${parseInt(baseColor.slice(1, 3), 16)}, ${parseInt(
				baseColor.slice(3, 5),
				16,
			)}, ${parseInt(baseColor.slice(5, 7), 16)}, ${brightness})`; // 현재 색상 생성

			canvasCtx.fillStyle = color; // 색상 설정
			canvasCtx.fillRect(i * (barWidth + 1), 0, barWidth, heightRatio);

			x += barWidth + 1; // 막대기 간격 추가
		}
	};

	const draw = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const canvasCtx = canvas.getContext('2d');

		const animate = () => {
			requestAnimationFrame(animate);
			if (canvas) {
				canvas.width = canvas.width; // 캔버스 초기화
				if (canvasCtx) {
					animateBars(canvasCtx!); // 막대기 애니메이션
				}
			}
		};

		animate();
	};

	useEffect(() => {
		draw();
	}, [audioElement]);

	// 최대 너비를 1024px로 설정
	const canvasWidth = Math.min(viewportWidth, 1024);

	return (
		<section className="audioWrap">
			<canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
		</section>
	);
};

export default AudioWaveform;
