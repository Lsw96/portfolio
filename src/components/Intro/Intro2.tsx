import React, { forwardRef } from 'react';

// styles
import styles from '@scss/components/Intro/intro2.module.scss';

// forwardRef를 사용하여 부모 컴포넌트에서 ref를 전달받음
const Intro2 = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => (
	<div className={styles.box} ref={ref}>
		<p>Intro2</p>
	</div>
));

export default Intro2;
