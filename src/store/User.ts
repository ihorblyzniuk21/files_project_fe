import { makeAutoObservable } from 'mobx';
import { api } from '../api/api';

export interface IUser {
	id: number,
	name: string,
	email: string,
	avatar: string
}

class User {
	public user: IUser | null = null;
	public error: any = null

	constructor() {
		makeAutoObservable(this);
	}

	login = async (token: {}) => {
			try {
				const res = await api.login(token)
				localStorage.setItem('accessToken', res.tokens.accessToken)
				this.user = res.user;
				return this.user;
			} catch (e) {
				console.log(e)
				this.error = e
				return this.user = null;
			}
	}

	logout = async () => {
		localStorage.removeItem('accessToken')
		await api.logout()
		this.user = null;
		console.log(this.user)
	}

	refreshUser = async () => {
		const res = await api.refresh()
		if (res.tokens) {
			localStorage.setItem('accessToken', res.tokens.accessToken)
		} else {
			localStorage.removeItem('accessToken')
		}

		if (res.user) {
			return this.user = res.user;
		} else {
			return this.user = null;
		}
	}


}

const userStore = new User();

export default userStore;