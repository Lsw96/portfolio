export const getMainArea = () => {
	const mainElement = document.querySelector('main');
	if (!mainElement) return { width: 0, height: 0, left: 0, top: 0 };

	const { width, height, left, top } = mainElement.getBoundingClientRect();
	return { width, height, left, top };
};

export const getCenterArea = (mainArea: ReturnType<typeof getMainArea>) => {
	const centerAreaWidth = Math.min(mainArea.width, mainArea.height) * 0.8;
	const centerAreaHeight = centerAreaWidth;
	const centerAreaX = mainArea.left + (mainArea.width - centerAreaWidth) / 2;
	const centerAreaY = mainArea.top + (mainArea.height - centerAreaHeight) / 2;

	return { centerAreaWidth, centerAreaHeight, centerAreaX, centerAreaY };
};

export const createStar = (
	id: number,
	mainArea: ReturnType<typeof getMainArea>,
	centerArea: ReturnType<typeof getCenterArea>,
) => {
	const size = Math.random() < 0.5 ? 4 : 8;
	let offsetX, offsetY;

	do {
		offsetX = Math.random() * (mainArea.width - size) + mainArea.left;
		offsetY = Math.random() * (mainArea.height - size) + mainArea.top;
	} while (
		offsetX >= centerArea.centerAreaX &&
		offsetX <= centerArea.centerAreaX + centerArea.centerAreaWidth &&
		offsetY >= centerArea.centerAreaY &&
		offsetY <= centerArea.centerAreaY + centerArea.centerAreaHeight
	);

	return { id, size, left: offsetX, top: offsetY };
};
