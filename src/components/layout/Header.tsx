import { useRef, useEffect, useState } from 'react';

// utils
import Animation from '@utils/animation';

// components
import AudioWaveform from '@components/common/AudioWaveform';

// images & audio
import logo from '/images/header_logo.svg';
import Sound from '/audio/backgroundSound.mp3';
import VolumeOn from '/audio/VolumeOn.gif';
import VolumeOff from '/audio/VolumeOff.gif';

const Header: React.FC = () => {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const iconRef = useRef<HTMLImageElement | null>(null);
	const [isAudioInitialized, setIsAudioInitialized] = useState(false);

	useEffect(() => {
		const audioElement = new Audio(Sound);
		audioRef.current = audioElement;

		const handleAudioEnd = () => {
			audioElement.currentTime = 0;
			audioElement.play();
			if (iconRef.current) {
				iconRef.current.src = VolumeOn;
			}
		};

		audioElement.addEventListener('ended', handleAudioEnd);

		return () => {
			audioElement.removeEventListener('ended', handleAudioEnd);
		};
	}, []);

	const handleAudioClick = () => {
		const audioElement = audioRef.current;
		const iconElement = iconRef.current;

		if (audioElement && iconElement) {
			Animation.layout.header(audioElement, iconElement);
			if (!isAudioInitialized) {
				setIsAudioInitialized(true);
			}
		}
	};

	const handleContentClick = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
				<section className="logo">
					<div className="logoInner" onClick={() => handleContentClick('intro')}>
						<img src={logo} className="logoImg" alt="Web Logo" />
						<h1 className="logoTitle">이성우</h1>
					</div>
					<img
						className="audioIcon"
						alt="Web Audio"
						src={VolumeOff}
						ref={iconRef}
						onClick={handleAudioClick}
					/>
				</section>
				{/* 로고 END */}

				{/* 오디오 창 */}
				<section className="audioView">
					<AudioWaveform audioElement={audioRef.current} />
				</section>
				{/* {isAudioInitialized && <AudioWaveform audioElement={audioRef.current} />} */}
				{/* 오디오 창 END */}
			</div>

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
		</header>
	);
};

export default Header;
