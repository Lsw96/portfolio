import React from 'react';

const SkipComponents: React.FC = () => {
	return (
		<div className='skip'>
			<a href="#header" className='skipLink'>
				헤더 영역 바로가기
			</a>
			<a href="#intro" className='skipLink'>
				소개 영역 바로가기
			</a>
			<a href="#skill" className='skipLink'>
				스킬 영역 바로가기
			</a>
			<a href="#site" className='skipLink'>
				사이트 영역 바로가기
			</a>
			<a href="#port" className='skipLink'>
				포트폴리오 영역 바로가기
			</a>
			<a href="#contact" className='skipLink'>
				연락처 영역 바로가기
			</a>
			<a href="#footer" className='skipLink'>
				푸터 영역 바로가기
			</a>
		</div>
	);
};

export default SkipComponents;
