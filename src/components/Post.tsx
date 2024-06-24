// src/components/Post.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, updatePost } from '../reducers/postSlice';

interface PostProps {
  post: {
    id: number;
    username: string;
    imageUrl: string;
    caption: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newCaption, setNewCaption] = useState(post.caption);
  const [newImageUrl, setNewImageUrl] = useState(post.imageUrl);
  const dispatch = useDispatch();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowOptions(false);
  };

  const handleSave = () => {
    dispatch(updatePost({ id: post.id, username: post.username, imageUrl: newImageUrl, caption: newCaption }));
    setIsEditing(false);
  };

  return (
    <div className="relative bg-white border rounded-lg mb-8">
      <div className="p-4 flex items-center justify-between">
        <div className="font-bold">{post.username}</div>
        <button className="text-sm font-medium text-gray-500 hover:text-gray-700" onClick={toggleOptions}>
          Options
        </button>
        {showOptions && (
          <div className="absolute right-4 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
            <button
              onClick={handleDelete}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Delete
            </button>
            <button
              onClick={handleEdit}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Edit
            </button>
          </div>
        )}
      </div>
      {isEditing ? (
        <div className="p-4">
          <input
            type="text"
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="New Image URL"
          />
          <textarea
            value={newCaption}
            onChange={(e) => setNewCaption(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="New Caption"
          />
          <button onClick={handleSave} className="mt-2 p-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      ) : (
        <>
          <img src={post.imageUrl} alt={post.caption} className="w-full" />
          <div className="p-4">
            <p>
              <span className="font-bold">{post.username}</span> {post.caption}
            </p>
          </div>
        </>
      )}
      <div className="absolute bottom-4 right-4">
        <button className="text-sm font-medium text-blue-500 hover:text-blue-700">Follow</button>
      </div>
    </div>
  );
};

export default Post;
