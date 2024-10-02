import { useRef, useEffect, useState } from 'react';

// utils
import Animation from '@utils/animation';

// components
import AudioWaveform from '@components/common/AudioWaveform';

// images
import logo from '/images/header_logo.svg';

// audio
import Sound from '/audio/backgroundSound.mp3';
import VolumeOn from '/audio/VolumeOn.gif';
import VolumeOff from '/audio/VolumeOff.gif';

const Header: React.FC = () => {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const iconRef = useRef<HTMLImageElement | null>(null);
	const [isAudioInitialized, setIsAudioInitialized] = useState(false);

	useEffect(() => {
		audioRef.current = new Audio(Sound);
        
		// ended 이벤트 리스너 등록
		const handleAudioEnd = () => {
			if (audioRef.current) {
				audioRef.current.currentTime = 0; // 오디오 시간을 처음으로 설정
				audioRef.current.play(); // 자동 재생
				if (iconRef.current) {
					iconRef.current.src = VolumeOn; // 아이콘 변경
				}
			}
		};

		const audioElement = audioRef.current;
		audioElement.addEventListener('ended', handleAudioEnd);

		// cleanup 함수: 언마운트 시 이벤트 리스너 제거
		return () => {
			audioElement.removeEventListener('ended', handleAudioEnd);
		};
	}, []);

	const handleContentClick = (id: string) => {
		const targetElement = document.getElementById(id);
		targetElement?.scrollIntoView({ behavior: 'smooth' });
	};

	const handleAudioClick = () => {
		if (audioRef.current && iconRef.current) {
			Animation.layout.header(audioRef.current, iconRef.current);
			if (!isAudioInitialized) {
				// AudioWaveform을 렌더링하면서 오디오 초기화
				setIsAudioInitialized(true); // 초기화 상태를 true로 변경
			}
		}
	};

	const navItems = [
		{ id: 'introduce', label: '소개' },
		{ id: 'skills', label: '기술' },
		{ id: 'project', label: '작업물' },
		{ id: 'connect', label: '연락처' },
	];

	return (
		<header className="header" ref={headerRef} role="banner">
			<div className="headerInner">
				{/* 로고 */}
				<section className="logo" onClick={() => handleContentClick('intro')}>
					<img src={logo} className="logoImg" alt="Web Logo" />
					<h1>이성우</h1>
					<img
						src={VolumeOff}
						alt="Web Audio"
						className="audioIcon"
						onClick={handleAudioClick}
						ref={iconRef}
					/>
				</section>
				{/* 로고 END */}

				{/* 메뉴 */}
				<nav role="navigation">
					<ul className="navList" role="list">
						{navItems.map(item => (
							<li className="listItem" key={item.id}>
								<a className="navItem" onClick={() => handleContentClick(item.id)}>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
				{/* 메뉴 END */}
			</div>

			{isAudioInitialized && <AudioWaveform audioElement={audioRef.current} />}
		</header>
	);
};

export default Header;
