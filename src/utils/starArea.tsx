export const getCenterArea = () => {
	const centerAreaWidth = Math.min(window.innerWidth, window.innerHeight) * 0.8;
	const centerAreaHeight = centerAreaWidth;
	const centerAreaX = (window.innerWidth - centerAreaWidth) / 2;
	const centerAreaY = (window.innerHeight - centerAreaHeight) / 2;

	return { centerAreaWidth, centerAreaHeight, centerAreaX, centerAreaY };
};

export const createStar = (id: number, centerArea: ReturnType<typeof getCenterArea>) => {
	const size = Math.random() < 0.5 ? 4 : 8;
	let offsetX, offsetY;

	do {
		offsetX = Math.random() * (window.innerWidth - size);
		offsetY = Math.random() * (window.innerHeight - size);
	} while (
		offsetX >= centerArea.centerAreaX &&
		offsetX <= centerArea.centerAreaX + centerArea.centerAreaWidth &&
		offsetY >= centerArea.centerAreaY &&
		offsetY <= centerArea.centerAreaY + centerArea.centerAreaHeight
	);

	return { id, size, left: offsetX, top: offsetY };
};
