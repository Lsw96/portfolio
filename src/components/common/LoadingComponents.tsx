import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// utils
import Animation from '@utils/animation';

interface LoadingComponentsReturn {
	count: number;
}

const LoadingComponents: React.FC<LoadingComponentsReturn> = ({ count }) => {
	const bodyRef = useRef<HTMLBodyElement | null>(null);
	const [displayCount, setDisplayCount] = useState(0);
	const [dots, setDots] = useState('');

	const isNearCompletion = useMemo(() => count >= 98, [count]);

	const motionProps = useMemo(
		() => ({
			initial: { opacity: 1 },
			animate: { opacity: isNearCompletion ? 0 : 1 },
			exit: { opacity: 0 },
			transition: { duration: 0.5, delay: isNearCompletion ? 0.5 : 0 },
		}),
		[isNearCompletion],
	);

	const progressBlocks = useMemo(
		() =>
			[...Array(10)].map((_, index) => (
				<motion.div
					key={index}
					className="progress-block"
					initial={{ opacity: 0 }}
					animate={{
						opacity: index < displayCount / 10 ? 1 : 0.1,
					}}
					transition={{ duration: 0.2 }}
				/>
			)),
		[displayCount],
	);

	useEffect(() => {
		const timeout = Animation.loading.handleCount({
			count,
			bodyRef,
			setDisplayCount,
		});
		return () => timeout && clearTimeout(timeout);
	}, [count]);

	useEffect(() => {
		const interval = Animation.loading.dots(setDots);
		return () => clearInterval(interval);
	}, []);

	return (
		<motion.section id="loading" {...motionProps}>
			<div className="loading-container">
				<div className="loading-text">
					<span className="status">불러오는중{dots}</span>
					<span className="percentage">{displayCount}%</span>
				</div>
				<div className="loading-bar">{progressBlocks}</div>
			</div>
		</motion.section>
	);
};

export default LoadingComponents;