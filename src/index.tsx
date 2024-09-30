import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import SmoothScrolling from '@components/common/SmoothScrolling';
import '@/assets/css/core-index.scss';

// redux
import { Provider } from 'react-redux';
import store from './store/Store';

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<SmoothScrolling>
			<App />
		</SmoothScrolling>
	</Provider>
);
