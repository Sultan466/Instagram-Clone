import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './reducers/postSlice';

interface NewPostFormProps {
  onClose?: () => void; // Make onClose optional
}

const NewPostForm: React.FC<NewPostFormProps> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      username,
      imageUrl,
      caption,
    };
    dispatch(addPost(newPost));
    setUsername('');
    setImageUrl('');
    setCaption('');
    if (onClose) {
      onClose(); // Call onClose if it is provided
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <div className="mb-4">
        <label className="block text-gray-700">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Caption:</label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Create Post
      </button>
    </form>
  );
};

export default NewPostForm;
