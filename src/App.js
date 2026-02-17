import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Terminal from './components/Terminal';
import Engines from './components/Engines';
import WPAdmin from './components/WPAdmin';
import Plugins from './components/Plugins';
import DevControls from './components/DevControls';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('terminal');
  const [diagnostics, setDiagnostics] = useState({
    internet: 'Green', gpuTemp: '65°C', memorySync: '72%', drives: 'C:, D:'
  });
  const [engines, setEngines] = useState([
    { name: 'Gemini', type: 'API', status: 'Connected', key: 'sk-...' },
    { name: 'ChatGPT', type: 'API', status: 'Connected', key: 'sk-...' },
    { name: 'Groq', type: 'API', status: 'Offline', key: '' },
    { name: 'Local Model', type: 'Ghost Stub', status: 'Empty Slot', key: '' },
  ]);
  const [wpSites, setWpSites] = useState([]);
  const [plugins, setPlugins] = useState([
    { name: 'WhatsApp', type: 'Social', connected: false },
    { name: 'Facebook', type: 'Social', connected: false },
  ]);

  // 5-second diagnosis update
  useEffect(() => {
    const interval = setInterval(() => {
      setDiagnostics({
        internet: Math.random() > 0.1 ? 'Green' : 'Red',
        gpuTemp: `${Math.floor(60 + Math.random() * 20)}°C`,
        memorySync: `${Math.floor(70 + Math.random() * 20)}%`,
        drives: 'C:, D:'
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleKillSwitch = () => {
    alert('System Frozen! All processes stopped.');
  };

  const addEngine = () => {
    setEngines([...engines, { name: 'New Engine', type: 'API', status: 'Empty Slot', key: '' }]);
  };

  const installWP = (domain, db) => {
    setWpSites([...wpSites, { domain, status: 'Installed' }]);
  };

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <Header diagnostics={diagnostics} handleKillSwitch={handleKillSwitch} />
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        setActiveSection={setActiveSection} 
      />
      <main className="flex-1 p-4 mt-16 overflow-y-auto">
        {activeSection === 'terminal' && <Terminal />}
        {activeSection === 'engines' && <Engines engines={engines} addEngine={addEngine} />}
        {activeSection === 'wp' && <WPAdmin wpSites={wpSites} installWP={installWP} />}
        {activeSection === 'plugins' && <Plugins plugins={plugins} />}
        {activeSection === 'dev' && <DevControls />}
        {/* Add more sections as needed */}
      </main>
    </div>
  );
}

export default App;
