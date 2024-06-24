// src/components/Header.tsx
import React from 'react';

const Header: React.FC<{ onNewPostClick: () => void }> = ({ onNewPostClick }) => {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Instagram Clone</div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded p-2"
          />
        </div>
        <div className="flex space-x-4">
          <button className="p-2">Home</button>
          <button className="p-2">Profile</button>
          <button onClick={onNewPostClick} className="p-2 bg-blue-500 text-white rounded">
            New Post
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
