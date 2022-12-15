import React, { FC, useEffect, useState } from 'react';
import './styles.scss';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../store/use-stores'
import { toJS } from 'mobx'
import { Avatar } from 'antd';
import { UserInterface } from '../../types/userInterface';

const AppBar: FC = () => {
	const { userStore } = useStores();
	const [user, setUser] = useState<UserInterface | null>(null)

	useEffect(() => {
		if (userStore.user) {
			setUser(toJS(userStore.user.user))
		}
	}, [userStore.user])

	return (
		<header className='container'>
			<div className='logo'>
				LOGO
			</div>
			<div className='menu'>
				{user ? (
					<div className='menu__item'>
						<Avatar src={user.avatar}/>
					</div>
				) : null
				}
			</div>
		</header>
	);
};

export default observer(AppBar);