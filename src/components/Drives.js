import React from 'react';

function Drives() {
  const drives = [
    { name: 'Drive 1', status: 'Connected', space: '50%', latency: '10ms' },
    { name: 'Drive 2', status: 'Full', space: '100%', latency: '20ms' },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Unlimited Drives</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th><th>Status</th><th>Space Used</th><th>Latency</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drives.map((drive, idx) => (
            <tr key={idx}>
              <td>{drive.name}</td>
              <td>{drive.status}</td>
              <td>{drive.space}</td>
              <td>{drive.latency}</td>
              <td>
                <button className="bg-red-600 px-2 py-1 rounded mr-2">Remove</button>
                <button className="bg-green-600 px-2 py-1 rounded">Add New Link</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Drives;
