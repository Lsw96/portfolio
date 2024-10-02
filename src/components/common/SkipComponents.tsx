import React from 'react';

const SkipComponents: React.FC = () => {
	return (
		<article id='skip'>
			<a href="#intro" className='skipLink'>
				소개
			</a>
			<a href="#skill" className='skipLink'>
				스킬
			</a>
			<a href="#project" className='skipLink'>
				작업물
			</a>
			<a href="#contact" className='skipLink'>
				연락처
			</a>
		</article>
	);
};

export default SkipComponents;
