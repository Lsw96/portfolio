import React, { useRef } from 'react';

// components
import Intro1 from '@components/Intro/Intro1';
import Intro2 from '@components/Intro/Intro2';
import Intro3 from '@components/Intro/Intro3';
import ProgressBar from '@components/common/ProgressBar';

const Intro: React.FC = () => {
	const intro1 = useRef<HTMLDivElement | null>(null);
	const intro2 = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<Intro1 ref={intro1} intro2Ref={intro2} />
			<Intro2 ref={intro2} />
			<Intro3 />
            <ProgressBar />
		</>
	);
};

export default Intro;
