import React, { FC } from 'react';
import './styles.scss';
import { GoogleLogin } from '@react-oauth/google';
import { observer } from 'mobx-react-lite';
import userStore from '../../store/User';
import { useNavigate } from 'react-router-dom';

const Login: FC = observer(() => {
	const navigate = useNavigate()

	const onSuccess = async (credentialResponse: any) => {
		await userStore.login({ token: credentialResponse.credential })
		navigate('/home')
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