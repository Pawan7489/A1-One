import React from 'react';

function Social() {
  const socialApps = [
    { name: 'WhatsApp', connected: false },
    { name: 'Facebook', connected: true },
    { name: 'Instagram', connected: false },
    { name: 'Truecaller', connected: false },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Social Integrations</h2>
      <div className="grid grid-cols-2 gap-4">
        {socialApps.map((app, idx) => (
          <div key={idx} className="bg-gray-700 p-4 rounded">
            <h3>{app.name}</h3>
            <p>Status: {app.connected ? 'Connected' : 'Not Connected'}</p>
            <button className="mr-2 bg-blue-600 px-2 py-1 rounded">Connect API</button>
            <button className="mr-2 bg-green-600 px-2 py-1 rounded">Cloud Storage Sync</button>
            <button className="bg-purple-600 px-2 py-1 rounded">Upload APK</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Social;
