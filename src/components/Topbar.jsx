import React from 'react';

const Topbar = () => {
  return (
    <div className="flex justify-end space-x-3 mb-6">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm">
        Proposals
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm">
        Custom Plan
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm">
        Work Order
      </button>
      <div className="relative inline-block text-left">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm">
          My Profile ▾
        </button>
        {/* Optional dropdown can go here */}
      </div>
    </div>
  );
};

export default Topbar;
