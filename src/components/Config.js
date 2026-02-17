import React, { useState } from 'react';

function Config() {
  const [configs, setConfigs] = useState([
    { name: 'Telegram API', url: 'https://api.telegram.org', key: 'sk-...' },
  ]);

  const addConfig = () => {
    setConfigs([...configs, { name: 'New Config', url: '', key: '' }]);
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">URL/API/Key Config</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Name</th><th>URL</th><th>Key</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {configs.map((config, idx) => (
            <tr key={idx}>
              <td>{config.name}</td>
              <td>{config.url}</td>
              <td>{config.key}</td>
              <td>
                <button className="bg-blue-600 px-2 py-1 rounded">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addConfig} className="mt-4 bg-green-600 px-4 py-2 rounded">Add Config</button>
    </div>
  );
}

export default Config;
