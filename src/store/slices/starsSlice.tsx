import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Star {
	id: number;
	size: number;
	left: number;
	top: number;
}

interface StarsState {
	stars: Star[];
}

const initialState: StarsState = {
	stars: [],
};

const starsSlice = createSlice({
	name: 'stars',
	initialState,
	reducers: {
		initializeStars: (state, action: PayloadAction<Star[]>) => {
			state.stars = action.payload;
		},
	},
});

export const { initializeStars } = starsSlice.actions;
export default starsSlice.reducer;
