import React, { FC } from 'react';
import './styles.scss';
import { useStores } from '../../store/use-stores'
import { GoogleLogin } from '@react-oauth/google';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx'
import { useCookies } from 'react-cookie';

const Login: FC = observer(() => {
	const { userStore } = useStores();

	const onSuccess = async (credentialResponse: any) => {
		const user = await userStore.login({ token: credentialResponse.credential })
	}

	return (
		<div className='login'>
			<div className='login__header'>VrealSoft test task</div>
			<hr/>
			<div className='login__body'>
				<div className='login__text'>Sign in/Sign up</div>
				<div className='login__button'>
					<GoogleLogin
					  onSuccess={credentialResponse => onSuccess(credentialResponse)}
					  onError={() => {
					    console.log('Login Failed');
					  }}
					/>
				</div>
			</div>
		</div>
	);
});

export default Login;