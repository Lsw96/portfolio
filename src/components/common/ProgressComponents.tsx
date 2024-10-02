import React, { useEffect, useRef } from 'react';

// utils
import Animation from '@utils/animation';

const ProgressComponents: React.FC = () => {
	const ProgressRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		Animation.layout.progress(ProgressRef);
	}, []);

	return (
		<article className="progress">
			<p>PORTFOLIO</p>
			<div className="scrollBg">
				<div className="scrollProgress" ref={ProgressRef}></div>
			</div>
			<p>2024.10.27</p>
		</article>
	);
};

export default ProgressComponents;
