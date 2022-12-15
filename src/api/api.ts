import axios from "axios";

const apiClient = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		"Accept": "application/json"
	},
	withCredentials: true
})

export const api = {
	login: async (body: any) => {
		const response = await apiClient.post('/user/login', body, { withCredentials: true });
		return response.data;
	},
	logout: async () => {
		const response = await apiClient.post('/user/logout')
		return response;
	},
	refresh: async () => {
		const response = await apiClient.get('/user/refresh', { withCredentials: true })
		return response.data;
	}
}