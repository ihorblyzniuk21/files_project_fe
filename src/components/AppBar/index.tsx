import React, { FC } from 'react';
import './styles.scss';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx'
import { Avatar } from 'antd';
import userStore from '../../store/User';

const AppBar: FC = observer(() => {
	const user = toJS(userStore.user)

	const onLogoutClick = async () => {
		await userStore.logout();
	}

	return (
		<header className='container'>
			<div className='logo'>
				LOGO
			</div>
			<div className='menu'>
				{user ? (
					<>
						<div className='menu__item'>
							<button className='menu__button_logout' onClick={onLogoutClick}>Log out</button>
						</div>
						<div className='menu__item'>
							<Avatar src={user.avatar}/>
						</div>
					</>
					) : null
				}
			</div>
		</header>
	);
});

export default AppBar;