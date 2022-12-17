import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CurrentFolder from '../components/CurrentFolder';

const AuthRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/home' element={<HomePage/>}/>
			<Route path='/folder/:id' element={<CurrentFolder/>}/>
		</Routes>
	);
};

export default AuthRoutes;