import React from 'react';

import { LoopingWordComponentsProps } from '@utils/types';

const LoopingWordComponents: React.FC<LoopingWordComponentsProps> = ({
	wordListRef,
	edgeElementRef,
}) => {
	const words = ['MADE-BY', '이성우', '프런트-엔드', '웹-개발자'];
	const edgeClasses = ['', 'is--2', 'is--3', 'is--4'];

	return (
		<section className="cloneable">
			<div className="looping-words">
				{/* 반복되는 단어 리스트 영역 */}
				<div className="looping-words__containers">
					<ul className="looping-words__list" ref={wordListRef} data-looping-words-list>
						{words.map((word, index) => (
							<li className="looping-words__list" key={index}>
								<p className="looping-words__p">{word}</p>
							</li>
						))}
					</ul>
				</div>
				{/* 반복되는 단어 리스트 영역 END */}

				{/* Edge 요소들을 묶은 영역 */}
				<div
					className="looping-words__selector"
					ref={edgeElementRef}
					data-looping-words-selector=""
				>
					{edgeClasses.map((edgeClass, index) => (
						<span key={index} className={`looping-words__edge ${edgeClass}`}></span>
					))}
				</div>
				{/* Edge 요소들을 묶은 영역 END */}
			</div>
		</section>
	);
};

export default LoopingWordComponents;
