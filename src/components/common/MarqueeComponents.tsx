import { MarqueeComponentsProps } from '../utils/types';

const MarqueeComponents: React.FC<MarqueeComponentsProps> = ({ target, title }) => {
	return (
		<section className="marqueeInner">
			<div className="container">
				<div className="content" ref={target}>
					{Array(3)
						.fill(0)
						.map((e, i) => (
							<h5 key={i} aria-label="hidden">
								{title}
							</h5>
						))}
				</div>
				<div className="content" ref={target}>
					{Array(3)
						.fill(0)
						.map((e, i) => (
							<h5 key={i} aria-label="hidden">
								{title}
							</h5>
						))}
				</div>
			</div>
		</section>
	);
};

export default MarqueeComponents;
