import React, { FC } from 'react';
import AppBar from '../../components/AppBar';
import Login from '../../components/Login';

const StartPage: FC = () => {
	return (
		<div>
			<AppBar/>
			<Login/>
		</div>
	);
};

export default StartPage;