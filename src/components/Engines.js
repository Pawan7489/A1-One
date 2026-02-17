import React from 'react';

function Engines({ engines, addEngine }) {
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Unlimited Cloud & AI Engine Hub</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th><th>Type</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {engines.map((engine, idx) => (
            <tr key={idx}>
              <td>{engine.name}</td>
              <td>{engine.type}</td>
              <td>{engine.status}</td>
              <td>
                <button className="bg-green-600 px-2 py-1 rounded">1-Click Inject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addEngine} className="mt-4 bg-blue-600 px-4 py-2 rounded">Add Engine</button>
    </div>
  );
}

export default Engines;
