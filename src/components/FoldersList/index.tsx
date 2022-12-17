import React, { FC, useState } from 'react';
import './styles.scss';
import folderStore from '../../store/Folder';
import CreateFolderModal from '../Modals/createFolderModal';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Dropdown, MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import RefactorFolderModel from '../Modals/refactorFolderModel';

const FoldersList: FC = () => {
	const navigate = useNavigate()
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isRefactorModalOpen, setIsRefactorModalOpen] = useState<boolean>(false);
	const [folderId, setFolderId] = useState<number | null>(null)

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const showRefactorModal = () => {
		setIsRefactorModalOpen(true);
	};

	const handleRefactorOk = () => {
		setIsRefactorModalOpen(false);
	};

	const handleRefactorCancel = () => {
		setIsRefactorModalOpen(false);
	};

	const items: MenuProps['items'] = [
		{
			label: <div onClick={showRefactorModal}>Edit/delete folder</div>,
			key: '0',
		},
	];

	return (
		<div className='folders-list'>
			<div className='folders-list__header'>
				<h2 className='folders-list__title'>Your folders:</h2>
				<div className="folders-list__button_create" onClick={showModal}>
					<svg xmlns="http://www.w3.org/2000/svg" width="30px" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
						<g>
							<g>
								<path d="M428.295,0H46.43C31.843,0,20.017,11.826,20.017,26.413V148.43c5.895-2.225,12.275-3.453,18.938-3.453H69.62V66.592    c0-5.157,4.181-9.339,9.339-9.339h316.81c5.157,0,9.339,4.181,9.339,9.339v18.864h30.663c6.664,0,13.044,1.227,18.938,3.453    V26.413C454.707,11.826,442.882,0,428.295,0z"/>
							</g>
						</g>
												<g>
							<g>
								<path d="M454.707,139.238c0-10.46-8.479-18.939-18.938-18.939H193.466c-7.342,0-14.023,4.244-17.143,10.89l-22.832,48.632H38.957    c-10.46,0-18.938,8.479-18.938,18.938v207.425c0,10.459,8.479,18.938,18.938,18.938h244.429    c0-67.117,54.604-121.721,121.721-121.721c17.656,0,34.443,3.783,49.601,10.574V139.238H454.707z"/>
							</g>
						</g>
												<g>
							<g>
								<path d="M405.106,338.246c-47.904,0-86.877,38.972-86.877,86.877S357.201,512,405.106,512s86.877-38.972,86.877-86.877    S453.01,338.246,405.106,338.246z M440.392,442.546h-4.624h-13.24v17.865c0.001,9.621-7.8,17.422-17.422,17.422    c-9.622,0-17.422-7.8-17.422-17.422v-17.865h-17.865c-9.622,0-17.422-7.8-17.422-17.422c0-9.622,7.8-17.422,17.422-17.422h17.865    v-17.865c0-9.622,7.8-17.422,17.422-17.422s17.422,7.8,17.422,17.422v17.865h17.865c9.622,0,17.422,7.8,17.422,17.422    C457.813,434.746,450.014,442.546,440.392,442.546z"/>
							</g>
						</g>
					</svg>
				</div>
			</div>
			<div className='folders-list__list'>
				{folderStore.folders && folderStore.folders.map((folder: any) => {
					return (
						<div className='folders-list__item' key={folder.id}>
							<div onClick={() => navigate(`/folder/${folder.id}`)} className='folders-list__icon'>
								<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 36.334 36.334">
									<g>
										<path d="M36.334,11.666v16.668c0,2.484-2.016,4.5-4.5,4.5H4.5c-2.485,0-4.5-2.016-4.5-4.5v-13v-3.668V8c0-2.486,2.015-4.5,4.5-4.5   h9.667c2.2,0,4.024,1.58,4.416,3.666h13.251C34.318,7.166,36.334,9.18,36.334,11.666z M24.552,25.221l6.37-6.369   c0.887-0.887,0.887-2.324,0-3.208c-0.886-0.887-2.32-0.887-3.208,0l-4.767,4.767l-1.936-1.938c-0.886-0.885-2.322-0.885-3.208,0   c-0.886,0.887-0.886,2.324,0,3.209l3.539,3.539c0.443,0.443,1.023,0.664,1.604,0.664C23.527,25.885,24.107,25.664,24.552,25.221z"/>
									</g>
								</svg>
							</div>
							<Dropdown onOpenChange={() => setFolderId(folder.id)} menu={{ items }} trigger={['click']}>
								<div style={{display: 'flex', justifyContent: 'space-between', cursor: 'pointer'}}>
									<div>{folder.name}</div>
									<DownOutlined />
								</div>
							</Dropdown>

						</div>
					)
				})}
			</div>
			<CreateFolderModal
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
				showModal={showModal}
				handleOk={handleOk}
				handleCancel={handleCancel}
			/>
			<RefactorFolderModel
				folderId={folderId}
				setIsModalOpen={setIsRefactorModalOpen}
				isModalOpen={isRefactorModalOpen}
				showModal={showRefactorModal}
				handleOk={handleRefactorOk}
				handleCancel={handleRefactorCancel}
			/>
		</div>
	);
};

export default observer(FoldersList);