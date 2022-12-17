import React from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import folderStore from '../../store/Folder';
import { observer } from 'mobx-react-lite';

interface Props {
	setIsModalOpen: (b: boolean) => void;
	isModalOpen: boolean;
	showModal: () => void;
	handleOk: () => void;
	handleCancel: () => void;
}

const CreateFolderModal: React.FC<Props> = ({ setIsModalOpen, isModalOpen, showModal, handleOk, handleCancel }) => {
	const [form] = Form.useForm();

	const onFinish = async (values: any) => {
		const body = {
			name: values.name,
			public: values.public || false
		}
		await folderStore.createFolder(body);
		await folderStore.getAllFolders()
		form.resetFields();
		setIsModalOpen(false)
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Modal title="Create folder" maskClosable={true} footer={null} open={isModalOpen} onCancel={handleCancel}>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Folder name"
					name="name"
					rules={[{ required: true, message: 'Please input your folder name!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="public" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
					<Checkbox>Make public</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default observer(CreateFolderModal);