import React, { FC, useEffect } from 'react';
import Login from '../../components/Login';
import userStore from '../../store/User';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const StartPage: FC = () => {
	const navigate = useNavigate()
	const user = toJS(userStore.user)

	useEffect(() => {
		if (user) {
			navigate('/home')
		}
	}, [])

	return (
		<div>
			{
				!user ? (
					<Login/>
				) : null
			}
		</div>
	);
};

export default observer(StartPage);