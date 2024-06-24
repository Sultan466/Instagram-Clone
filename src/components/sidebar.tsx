// src/components/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white border rounded-lg p-4">
        <div className="font-bold mb-4">Suggestions for you</div>
        {/* Suggestions list */}
        <div>
          <div className="flex items-center mb-4">
            <div className="font-bold">user3</div>
            <button className="ml-auto text-blue-500">Follow</button>
          </div>
          <div className="flex items-center mb-4">
            <div className="font-bold">user4</div>
            <button className="ml-auto text-blue-500">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
