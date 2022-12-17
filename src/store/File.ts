import { makeAutoObservable } from 'mobx';
import { api } from '../api/api';

class File {
	public files: any = null;
	public error: any = null

	constructor() {
		makeAutoObservable(this);
	}

	addFile = async (body: any, folderId: number) => {
		await api.addFile(body, folderId);
	}

	getAllFiles = async (folderId: number) => {
		const files = await api.getAllFiles(folderId);
		this.files = files;
	}

	deleteFile = async (fileId: number) => {
		await api.deleteFile(fileId);
	}

}

const fileStore = new File();

export default fileStore;