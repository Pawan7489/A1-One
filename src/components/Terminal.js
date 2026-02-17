import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

function Terminal() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('Welcome to A1 Universal Terminal. Enter Hinglish/Intent Command...');

  const handleExecute = () => {
    setTerminalOutput(`Executed: ${terminalInput}. Response: AI processing...`);
    setTerminalInput('');
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-bold mb-4">Universal Terminal & Intent Core</h2>
      <div className="bg-black p-4 rounded mb-4">
        <textarea 
          value={terminalOutput} 
          readOnly 
          className="w-full h-32 bg-black text-green-400 font-mono" 
        />
        <input 
          type="text" 
          placeholder="Enter Hinglish/Intent Command..." 
          value={terminalInput} 
          onChange={(e) => setTerminalInput(e.target.value)} 
          className="w-full p-2 bg-gray-700 text-white mt-2" 
        />
        <button onClick={handleExecute} className="mt-2 bg-blue-600 px-4 py-2 rounded">Execute</button>
      </div>
      <div className="flex space-x-4">
        <ThumbsUp className="w-6 h-6 text-green-400 cursor-pointer" />
        <ThumbsDown className="w-6 h-6 text-red-400 cursor-pointer" />
      </div>
      <div className="mt-4">
        <h3>Council of Experts</h3>
        <div className="flex space-x-4">
          <div className="bg-gray-700 p-2 rounded">Agent 1: Auditing...</div>
          <div className="bg-gray-700 p-2 rounded">Agent 2: Auditing...</div>
          <div className="bg-gray-700 p-2 rounded">Agent 3: Auditing...</div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
