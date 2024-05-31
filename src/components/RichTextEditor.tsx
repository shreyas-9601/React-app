// src/components/RichTextEditor.tsx
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import './RichTextEditor.css';

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState('');
  const users = useSelector((state: RootState) => state.user.users);

  useEffect(() => {
    if (users.length > 0) {
      const userData = users.map(user => 
        `Name: ${user.name}\nAddress: ${user.address}\nEmail: ${user.email}\nPhone: ${user.phone}`
      ).join('\n\n');
      setContent(userData);
    }
  }, [users]);

  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem('richTextContent', value);
  };

  useEffect(() => {
    const savedContent = localStorage.getItem('richTextContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  return (
    <div className="richtext-editor-container">
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
