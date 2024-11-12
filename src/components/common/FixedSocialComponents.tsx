import React, { useMemo } from 'react';
import { SocialLink } from '@utils/types';
import useWindowSize from '@hooks/useWindowSize';

interface FixedSocialComponentsProps {
	data: SocialLink[];
}

const FixedSocialComponents = ({ data }: FixedSocialComponentsProps) => {
	const { width } = useWindowSize();
	const tabletBreakpoint = 768; // $breakpoint-tablet 값과 동일하게 설정

	const socialLinks = useMemo(
		() =>
			data.map(link => ({
				...link,
				flow: width < tabletBreakpoint ? 'top' : link.flow,
			})),
		[data, width],
	);

	return (
		<aside className="social-icons">
			{socialLinks.map(link => (
				<a
					key={link.id}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className={`social-icon ${link.flow}`}
					aria-label={link.ariaLabel}
					data-tooltip={link.tooltip}
				>
					{link.icon}
				</a>
			))}
		</aside>
	);
};

export default FixedSocialComponents;
