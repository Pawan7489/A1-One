import React from 'react';
import { Globe, Cpu, HardDrive, Monitor, AlertTriangle } from 'lucide-react';

function Header({ diagnostics, handleKillSwitch }) {
  return (
    <header className="w-full bg-gray-800 p-4 flex justify-between items-center fixed top-0 z-10">
      <h1 className="text-xl font-bold">A1 CORE ENGINE</h1>
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <Globe className={`w-4 h-4 ${diagnostics.internet === 'Green' ? 'text-green-400' : 'text-red-400'}`} />
          <span>Internet: {diagnostics.internet}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-blue-400" />
          <span>GPU: {diagnostics.gpuTemp}</span>
        </div>
        <div className="flex items-center space-x-2">
          <HardDrive className="w-4 h-4 text-yellow-400" />
          <span>Memory: {diagnostics.memorySync}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Monitor className="w-4 h-4 text-purple-400" />
          <span>Drives: {diagnostics.drives}</span>
        </div>
      </div>
      <button 
        onClick={handleKillSwitch} 
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center"
      >
        <AlertTriangle className="w-4 h-4 mr-2" />
        EMERGENCY KILL SWITCH
      </button>
    </header>
  );
}

export default Header;
