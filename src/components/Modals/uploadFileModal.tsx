import React, { useState } from 'react';
import { Button, Checkbox, Form, Modal } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Upload } from 'antd';
import { observer } from 'mobx-react-lite';
import fileStore from '../../store/File';

const { Dragger } = Upload;

interface Props {
	isModalOpen: boolean;
	showModal: () => void;
	handleOk: () => void;
	handleCancel: () => void;
	folderId: number;
}

const UploadFileModal: React.FC<Props> = ({ isModalOpen, showModal, handleOk, handleCancel, folderId }) => {
	const [form] = Form.useForm();

	const [files, setFiles] = useState<any>(null)

	const onFinish = async (values: any) => {
		const formData = new FormData();

		formData.append('file', files[0].originFileObj);
		formData.append('public', values.public || false);

		if (files) {
			await fileStore.addFile(formData, folderId)
		}

		form.resetFields();
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const props: UploadProps = {
		name: 'file',
		multiple: false,
		onChange(info) {
			setFiles(info.fileList);
		},
		onDrop(e) {
			console.log('Dropped files', e.dataTransfer.files);
		},
		beforeUpload: () => false
	};

	return (
		<Modal title="Upload file" maskClosable={true} footer={null} open={isModalOpen} onCancel={handleCancel}>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Dragger {...props}>
					<p className="ant-upload-drag-icon">
						<InboxOutlined />
					</p>
					<p className="ant-upload-text">Click or drag file to this area to upload</p>
					<p className="ant-upload-hint">
						Support for a single or bulk upload. Strictly prohibit from uploading company data or other
						band files
					</p>
				</Dragger>
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

export default observer(UploadFileModal);