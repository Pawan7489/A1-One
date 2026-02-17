import React, { useState } from 'react';

function Hosting() {
  const [hostings, setHostings] = useState([
    { name: 'Hostinger Server 1', status: 'Active', domain: 'example.com' },
    { name: 'GoDaddy Server 2', status: 'Inactive', domain: 'test.com' },
  ]);

  const addHosting = () => {
    setHostings([...hostings, { name: 'New Hosting', status: 'Pending', domain: '' }]);
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Unlimited Hosting</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th><th>Status</th><th>Domain</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hostings.map((hosting, idx) => (
            <tr key={idx}>
              <td>{hosting.name}</td>
              <td>{hosting.status}</td>
              <td>{hosting.domain}</td>
              <td>
                <button className="bg-blue-600 px-2 py-1 rounded mr-2">Manage</button>
                <button className="bg-red-600 px-2 py-1 rounded">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addHosting} className="mt-4 bg-green-600 px-4 py-2 rounded">Add Hosting Server</button>
    </div>
  );
}

export default Hosting;
