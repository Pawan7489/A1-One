import React, { useState } from 'react';
import { AlertTriangle, Wrench } from 'lucide-react';

function AutoRepair() {
  const [errors, setErrors] = useState([
    { id: 1, component: 'Engine: Gemini', error: 'API Key Expired', fix: 'Renew API Key' },
    { id: 2, component: 'Drive: C:', error: 'Latency High', fix: 'Optimize Connection' },
  ]);

  const handleFix = (id) => {
    setErrors(errors.filter(error => error.id !== id));
    alert('Error Fixed!');
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4 flex items-center">
        <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
        Auto-Repair Suggestions
      </h2>
      <ul className="space-y-2">
        {errors.map((error) => (
          <li key={error.id} className="bg-gray-700 p-3 rounded flex justify-between items-center">
            <div>
              <strong>{error.component}:</strong> {error.error}
            </div>
            <button 
              onClick={() => handleFix(error.id)} 
              className="bg-green-600 px-3 py-1 rounded flex items-center"
            >
              <Wrench className="w-4 h-4 mr-1" />
              Fix
            </button>
          </li>
        ))}
      </ul>
      {errors.length === 0 && <p className="text-green-400">No errors detected. System healthy!</p>}
    </div>
  );
}

export default AutoRepair;
