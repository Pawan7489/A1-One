import React from 'react';

function DevControls() {
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Advanced Dev Controls</h2>
      <div className="flex space-x-4 mb-4">
        <textarea placeholder="JavaScript Control Panel" className="w-1/2 h-32 bg-gray-700 text-white p-2 rounded" />
        <textarea placeholder="Java Control Panel" className="w-1/2 h-32 bg-gray-700 text-white p-2 rounded" />
      </div>
      <div>
        <h3>Visual Logic Builder</h3>
        <div className="bg-gray-700 h-32 p-4 rounded flex items-center justify-center">
          <span>Drag-and-drop canvas for nodes (e.g., Hosting to Domain). [Placeholder – Add drag library later]</span>
        </div>
      </div>
    </div>
  );
}

export default DevControls;
