import React from 'react';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from '../pages/StartPage';

const NotAuthRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<StartPage/>}/>
		</Routes>
	);
};

export default NotAuthRoutes;