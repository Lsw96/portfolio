import React, { forwardRef, useRef } from 'react';

// hooks
import Images from '@components/hooks/Image';

// images
import profileImg from '@images/profile.png';

// styles
import styles from '@scss/components/Intro/intro2.module.scss';

const useRefs = () => {
	return {
		profile: useRef<HTMLImageElement | null>(null),
	};
};

const Intro2 = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => {
	const { profile } = useRefs();

	return (
		<section className={styles.container} ref={ref}>
			<div className={styles.profileWrap} ref={profile}>
				<Images src={profileImg} alt={'이성우 이미지'} className={styles.profileImg} />
			</div>
		</section>
	);
});

export default Intro2;
