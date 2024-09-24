// store/slices/smoothScrollingSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// SmoothScrolling 상태의 타입 정의
interface SmoothScrollingState {
	lerp: number;
	duration: number;
	smoothTouch: boolean;
	smooth: boolean;
}

// 초기 상태 정의
const initialState: SmoothScrollingState = {
	lerp: 0.1,
	duration: 1.5,
	smoothTouch: false,
	smooth: true,
};

// Slice 생성
const smoothScrollingSlice = createSlice({
	name: 'smoothScrolling',
	initialState,
	reducers: {
		setLerp(state, action: PayloadAction<number>) {
			state.lerp = action.payload;
		},
		setDuration(state, action: PayloadAction<number>) {
			state.duration = action.payload;
		},
		toggleSmoothTouch(state) {
			state.smoothTouch = !state.smoothTouch;
		},
		toggleSmooth(state) {
			state.smooth = !state.smooth;
		},
	},
});

// 액션과 리듀서를 export
export const { setLerp, setDuration, toggleSmoothTouch, toggleSmooth } =
	smoothScrollingSlice.actions;
export default smoothScrollingSlice.reducer;
