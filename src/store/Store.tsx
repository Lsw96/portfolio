import { configureStore } from '@reduxjs/toolkit';

// slices
import smoothScrollingReducer from './slices/smoothScrollingSlice';
import headerReducer from './slices/headerSlice';
import starsReducer from './slices/starsSlice';

// Redux store 생성
const Store = configureStore({
	reducer: {
		smoothScrolling: smoothScrollingReducer,
		header: headerReducer,
		stars: starsReducer,
	},
});

// RootState, AppDispatch 타입 정의
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;