import { makeAutoObservable } from 'mobx';
import { api } from '../api/api';

class Folder {
	public folders: any = null;
	public currentFolder: any = null;
	public error: any = null;

	constructor() {
		makeAutoObservable(this);
	}

	createFolder = async (body: any) => {
		const res = await api.createFolder(body);
		this.currentFolder = res;
		return this.currentFolder
	}

	getAllFolders = async () => {
		const res = await api.getAllFolders();
		this.folders = res;
		return this.folders;
	}

	getOneFolder = async (folderId: number) => {
		const res = await api.getOneFolder(folderId);
		this.currentFolder = res;
		return this.currentFolder;
	}

	updateFolder = async (folderId: number | null, body: any) => {
		const res = await api.updateFolder(folderId, body);
		this.currentFolder = res;
		return this.currentFolder;
	}

	deleteFolder = async (folderId: number | null) => {
		const res = await api.deleteFolder(folderId);
		this.currentFolder = null;
		return this.currentFolder
	}
}

const folderStore = new Folder();

export default folderStore;