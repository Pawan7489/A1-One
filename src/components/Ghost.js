import React, { useState } from 'react';

function Ghost() {
  const [ghosts, setGhosts] = useState([
    { name: 'Local Model 1', status: 'Active', type: 'Stub' },
    { name: 'Local Model 2', status: 'Inactive', type: 'Full' },
  ]);

  const addGhost = () => {
    setGhosts([...ghosts, { name: 'New Ghost', status: 'Empty', type: 'Stub' }]);
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Ghost Modules</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th><th>Type</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ghosts.map((ghost, idx) => (
            <tr key={idx}>
              <td>{ghost.name}</td>
              <td>{ghost.type}</td>
              <td>{ghost.status}</td>
              <td>
                <button className="bg-blue-600 px-2 py-1 rounded mr-2">Activate</button>
                <button className="bg-red-600 px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addGhost} className="mt-4 bg-green-600 px-4 py-2 rounded">Add Ghost Module</button>
    </div>
  );
}

export default Ghost;
