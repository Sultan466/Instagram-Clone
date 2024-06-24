import React from 'react';
import NewPostForm from '../NewPostForm';

interface NewPostModalProps {
  onClose: () => void;
}

const NewPostModal: React.FC<NewPostModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <NewPostForm onClose={onClose} />
      </div>
    </div>
  );
};

export default NewPostModal;
