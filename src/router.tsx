import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Intro from '@pages/Intro';
import Project from '@pages/Project';
import Connect from '@pages/Connect';

// components
import Header from '@components/Header';

const Router: React.FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Intro />} />
				<Route path="/project" element={<Project />} />
				<Route path="/connect" element={<Connect />} />
			</Routes>
		</>
	);
};

export default Router;
