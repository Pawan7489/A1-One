import React, { useState } from 'react';
import { Users, ToggleLeft, ToggleRight } from 'lucide-react';

function PersonaVoice() {
  const [personas, setPersonas] = useState([
    { name: 'Bache (Kids)', tone: 'Friendly & Simple', active: false },
    { name: 'Adults', tone: 'Professional & Detailed', active: true },
    { name: 'Seniors', tone: 'Calm & Clear', active: false },
  ]);

  const togglePersona = (idx) => {
    setPersonas(personas.map((persona, i) => 
      i === idx ? { ...persona, active: !persona.active } : persona
    ));
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4 flex items-center">
        <Users className="w-5 h-5 mr-2 text-blue-400" />
        Persona Voice Switching
      </h2>
      <div className="space-y-3">
        {personas.map((persona, idx) => (
          <div key={idx} className="bg-gray-700 p-3 rounded flex justify-between items-center">
            <div>
              <strong>{persona.name}:</strong> {persona.tone}
            </div>
            <button 
              onClick={() => togglePersona(idx)} 
              className={`px-3 py-1 rounded flex items-center ${persona.active ? 'bg-green-600' : 'bg-gray-600'}`}
            >
              {persona.active ? <ToggleRight className="w-4 h-4 mr-1" /> : <ToggleLeft className="w-4 h-4 mr-1" />}
              {persona.active ? 'Active' : 'Inactive'}
            </button>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-400">Active persona will adjust AI responses accordingly.</p>
    </div>
  );
}

export default PersonaVoice;
