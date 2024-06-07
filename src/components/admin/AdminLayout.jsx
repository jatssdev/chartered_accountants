import React, { useState, useEffect } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, List, Typography, Modal } from 'antd';

const { Dragger } = Upload;

const AdminLayout = () => {
  const [bills, setBills] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch past bills when component mounts
  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch('https://660d2bd96ddfa2943b33731c.mockapi.io/api/bills');
        const data = await response.json();
        setBills(data);
      } catch (error) {
        message.error('Failed to fetch bills');
      }
    };
    fetchBills();
  }, []);

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        const newFile = {
          name: info.file.name,
          date: new Date().toLocaleString(),
          url: info.file.response?.url || '', // Assuming the response contains the file URL
        };
        setUploadedFiles(prevFiles => [...prevFiles, newFile]);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        console.error('Upload error:', info.file.response);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleModalClose = () => {
    setSelectedFile(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger>

      <div style={{ marginTop: '20px' }}>
        <Typography.Title level={4}>Uploaded Files</Typography.Title>
        <List
          bordered
          dataSource={uploadedFiles}
          renderItem={item => (
            <List.Item onClick={() => handleFileClick(item)}>
              {item.name} - {item.date}
            </List.Item>
          )}
        />
      </div>

      <Modal
        title="File Details"
        visible={selectedFile !== null}
        onCancel={handleModalClose}
        footer={null}
      >
        {selectedFile && (
          <div>
            <p><strong>Name:</strong> {selectedFile.name}</p>
            <p><strong>Date:</strong> {selectedFile.date}</p>
            {selectedFile.url && <p><strong>URL:</strong> <a href={selectedFile.url} target="_blank" rel="noopener noreferrer">View File</a></p>}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminLayout;
