import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

import Layout from '@components/Layout';

const App: React.FC = () => {
	return (
		<>
			<div id="App">
				<BrowserRouter>
					<Layout>
						<Router />
					</Layout>
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
