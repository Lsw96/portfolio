import React from 'react';

interface childrenProps {
	children: React.ReactNode;
}

const Main: React.FC<childrenProps> = ({ children }) => {
	return <main role="main">{children}</main>;
};

export default Main;
