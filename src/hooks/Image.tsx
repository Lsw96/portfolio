import React, { forwardRef } from 'react';

interface ImageProps {
	src: string;
	alt: string;
	className?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, alt, className }, ref) => {
	return <img src={src} alt={alt} className={className} ref={ref} />;
});

export default Image;
