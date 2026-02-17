import React from 'react';

function Builder() {
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Drag-Drop Builder</h2>
      <div className="bg-gray-700 h-64 p-4 rounded flex items-center justify-center">
        <span>Visual Logic Builder Canvas: Drag nodes here (e.g., Hosting Node to Domain Node). [Placeholder – Add drag library like React DnD later for full functionality]</span>
      </div>
      <div className="mt-4">
        <button className="bg-blue-600 px-4 py-2 rounded mr-2">Add Hosting Node</button>
        <button className="bg-green-600 px-4 py-2 rounded">Add Domain Node</button>
      </div>
    </div>
  );
}

export default Builder;
