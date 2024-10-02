// 브라우저 창의 크기를 추적하고, 크기가 변경될 때마다 상태를 업데이트하는 훅
import { useCallback, useEffect, useState } from 'react';

const useSize = () => {
	const [width, setWidth] = useState(0); // 브라우저 창 너비
	const [height, setHeight] = useState(0); // 브라우저 창 높이

    // 현재 창의 너비와 높이 설정
	const setSizes = useCallback(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}, [setWidth, setHeight]);

    // 마운트될 때 또는 창 크기가 변경될 때마다 setSizes함수 호출
	useEffect(() => {
		window.addEventListener('resize', setSizes);
		setSizes();
	}, [setSizes]);

	return [width, height];
};

export default useSize;
