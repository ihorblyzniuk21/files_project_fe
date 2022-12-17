import axios from "axios";

const apiClient = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		"Accept": "application/json"
	},
	withCredentials: true
})

export const api = {

	//USER
	login: async (body: any) => {
		const response = await apiClient.post('/user/login', body, { withCredentials: true });
		return response.data;
	},
	logout: async () => {
		const response = await apiClient.post('/user/logout');
		return response;
	},
	refresh: async () => {
		const response = await apiClient.get('/user/refresh', { withCredentials: true });
		return response.data;
	},

	//FOLDER
	createFolder: async (body: any) => {
		const response = await apiClient.post('/folder', body, { withCredentials: true });
		return response.data;
	},

	getAllFolders: async () => {
		const response = await apiClient.get('/folder', { withCredentials: true });
		return response.data;
	},

	getOneFolder: async (folderId: number) => {
		const response = await apiClient.get(`/folder/${folderId}`, { withCredentials: true });
		return response.data;
	},

	updateFolder: async (folderId: number | null, body: any) => {
		const response = await apiClient.put(`/folder/${folderId}`, body, { withCredentials: true });
		return response.data;
	},

	deleteFolder: async (folderId: number | null) => {
		const response = await apiClient.delete(`/folder/${folderId}`, { withCredentials: true });
		return response.data;
	},

	//FILE
	addFile: async (body: any, folderId: number) => {
		const response = await apiClient.post(`file/${folderId}`, body);
		return response.data;
	},

	getAllFiles: async (folderId: number) => {
		const response = await apiClient.get(`file/${folderId}`);
		return response.data;
	},

	deleteFile: async (fileId: number) => {
		const response = await apiClient.delete(`file/${fileId}`);
		return response.data;
	}
}