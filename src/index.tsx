import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/Store';

// pages
import App from './App';

// components
import SmoothScrolling from '@components/SmoothScrolling';

// styles
import '@scss/core-index.scss';

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
		<Provider store={store}>
			<SmoothScrolling>
				<App />
			</SmoothScrolling>
		</Provider>
	// </StrictMode>
);
