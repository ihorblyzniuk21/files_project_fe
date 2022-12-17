import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import folderStore from '../../store/Folder';
import fileStore from '../../store/File';
import { toJS } from 'mobx';

import './styles.scss';
import UploadFileModal from '../Modals/uploadFileModal';

const CurrentFolder: FC = () => {
	const params = useParams()
	const currentFolder = toJS(folderStore.currentFolder)

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			await fileStore.getAllFiles(Number(params.id))
		})()
	}, [])

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		(async () => {
			// await folderStore.getOneFolder(Number(params.id));
		})()
	}, [])

	return (
		<div className='current-folder'>
			<div className='current-folder__header'>
				<h2 className='current-folder__title'>{ currentFolder?.name }</h2>
				<button onClick={showModal}>Add files</button>
			</div>
			<div className='current-folder__content'>
				<h2 className='current-folder__content-title'>Your files:</h2>
				<div className="current-folder__content-list">
					{fileStore.files && fileStore.files.map((file: any) => {
						return (
							<div className='current-folder__file'>
								<img src={`http://localhost:4000/${file.path}`}/>
								<div className='current-folder__file-name'>{file.name}</div>
							</div>
						)
					})}
				</div>

			</div>
			<UploadFileModal
				isModalOpen={isModalOpen}
				showModal={showModal}
				handleOk={handleOk}
				handleCancel={handleCancel}
				folderId={Number(params.id)}
			/>
		</div>
	);
};


export default observer(CurrentFolder);