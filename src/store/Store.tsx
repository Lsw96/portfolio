import { configureStore } from '@reduxjs/toolkit';

import smoothScrollingReducer from './slices/smoothScrollingSlice';
import headerReducer from './slices/headerSlice';

// Redux store 생성
const Store = configureStore({
	reducer: {
		smoothScrolling: smoothScrollingReducer,
		header: headerReducer,
	},
});

// RootState와 AppDispatch 타입 정의
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
 