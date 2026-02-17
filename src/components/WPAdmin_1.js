import React, { useState } from 'react';

function WPAdmin({ wpSites, installWP }) {
  const [domain, setDomain] = useState('');
  const [db, setDb] = useState('');

  const handleInstall = () => {
    if (domain && db) {
      installWP(domain, db);
      setDomain('');
      setDb('');
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">WordPress, Hosting & Web Admin</h2>
      <div className="mb-4">
        <input 
          placeholder="Domain" 
          value={domain} 
          onChange={(e) => setDomain(e.target.value)} 
          className="p-2 bg-gray-700 text-white mr-2" 
        />
        <input 
          placeholder="DB Info" 
          value={db} 
          onChange={(e) => setDb(e.target.value)} 
          className="p-2 bg-gray-700 text-white mr-2" 
        />
        <button onClick={handleInstall} className="bg-green-600 px-4 py-2 rounded">Install WordPress</button>
      </div>
      <ul>
        {wpSites.map((site, idx) => (
          <li key={idx} className="flex justify-between items-center mb-2">
            <span>{site.domain} - {site.status}</span>
            <button className="bg-blue-600 px-2 py-1 rounded">1-Click Build AI into Website</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WPAdmin;
