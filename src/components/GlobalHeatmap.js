import React from 'react';
import { MapPin, Globe } from 'lucide-react';

function GlobalHeatmap() {
  const locations = [
    { region: 'North America', resources: 'Cloud Storage: 40%', status: 'Active' },
    { region: 'Europe', resources: 'AI Engines: 30%', status: 'Active' },
    { region: 'Asia', resources: 'Local PC: 20%', status: 'Active' },
    { region: 'Australia', resources: 'Drives: 10%', status: 'Inactive' },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4 flex items-center">
        <Globe className="w-5 h-5 mr-2 text-green-400" />
        Global Heatmap
      </h2>
      <div className="bg-gray-700 h-64 p-4 rounded flex items-center justify-center mb-4">
        <span>Interactive Map Placeholder: Distributed Mesh Resources [Add map library like Leaflet for full visualization]</span>
      </div>
      <ul className="space-y-2">
        {locations.map((loc, idx) => (
          <li key={idx} className="bg-gray-700 p-3 rounded flex justify-between items-center">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-blue-400" />
              <strong>{loc.region}:</strong> {loc.resources}
            </div>
            <span className={`px-2 py-1 rounded text-sm ${loc.status === 'Active' ? 'bg-green-600' : 'bg-red-600'}`}>
              {loc.status}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-gray-400">This shows real-time resource distribution across the globe.</p>
    </div>
  );
}

export default GlobalHeatmap;
