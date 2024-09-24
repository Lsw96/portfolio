import { ReactLenis } from '@studio-freight/react-lenis';
import { useSelector } from 'react-redux';
import { RootState } from '@store/Store'; // RootState 타입을 가져옴

interface SmoothScrollingProps {
	children: React.ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
	// Redux store에서 smoothScrolling 상태를 가져옴
	const { lerp, duration, smoothTouch, smooth } = useSelector(
		(state: RootState) => state.smoothScrolling,
	);

	// lenis options을 Redux 상태로 설정
	const lenisOptions = {
		lerp,
		duration,
		smoothTouch,
		smooth,
	};

	return (
		<ReactLenis root options={lenisOptions}>
			{children}
		</ReactLenis>
	);
};

export default SmoothScrolling;
