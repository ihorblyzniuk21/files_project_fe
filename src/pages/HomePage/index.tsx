import React, { FC, useEffect } from 'react';
import FoldersList from '../../components/FoldersList';
import folderStore from '../../store/Folder';

const HomePage: FC = () => {

	useEffect(() => {
		(async () => {
			await folderStore.getAllFolders()
		})()
	}, [])

	return (
		<div>
			<FoldersList/>
		</div>
	);
};

export default HomePage;