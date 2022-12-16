import React, { FC } from 'react';
import AppBar from '../../components/AppBar';
import Login from '../../components/Login';
import userStore from '../../store/User';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

const StartPage: FC = () => {
	const user = toJS(userStore.user)

	return (
		<div>
			<AppBar/>
			{
				!user ? (
					<Login/>
				) : null
			}
		</div>
	);
};

export default observer(StartPage);