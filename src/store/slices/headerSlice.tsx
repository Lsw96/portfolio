import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
	isVisible: boolean;
}

const initialState: HeaderState = {
	isVisible: true, // 헤더의 기본 상태
};

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		toggleHeader(state, action: PayloadAction<boolean>) {
			state.isVisible = action.payload;
		},
	},
});

export const { toggleHeader } = headerSlice.actions;
export default headerSlice.reducer;
