import { makeAutoObservable } from "mobx";
import { api } from "../api/api";

export interface IUser {
	id: number,
	name: string,
	email: string,
	avatar: string
}

export class User {
	public user: IUser | any = {};
	public error: any = null

	constructor() {
		makeAutoObservable(this)
	}

	async login(token: {}) {
		try {
			const user = await api.login(token)
			localStorage.setItem('accessToken', user.tokens.accessToken)
			this.user = user;
			return this.user;
		} catch (e) {
			console.log(e)
			this.error = e
			return this.user = null;
		}
	}

	async logout() {
		this.user = {};
		localStorage.removeItem('accessToken')
		return await api.logout()
	}

	async refreshUser() {
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