import React, { useState } from 'react';

function DNS() {
  const [domains, setDomains] = useState([
    { name: 'example.com', status: 'Active', records: 'A: 192.168.1.1' },
    { name: 'test.com', status: 'Pending', records: 'CNAME: www.test.com' },
  ]);

  const addDomain = () => {
    setDomains([...domains, { name: 'New Domain', status: 'Pending', records: '' }]);
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Domains & DNS</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th><th>Status</th><th>DNS Records</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {domains.map((domain, idx) => (
            <tr key={idx}>
              <td>{domain.name}</td>
              <td>{domain.status}</td>
              <td>{domain.records}</td>
              <td>
                <button className="bg-blue-600 px-2 py-1 rounded mr-2">Edit DNS</button>
                <button className="bg-red-600 px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addDomain} className="mt-4 bg-green-600 px-4 py-2 rounded">Add Domain</button>
    </div>
  );
}

export default DNS;
