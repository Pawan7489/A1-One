import React from 'react';
import { Terminal, Cloud, Brain, Globe2, Settings, Code, Menu } from 'lucide-react';

function Sidebar({ sidebarOpen, setSidebarOpen, setActiveSection }) {
  return (
    <aside className={`bg-gray-800 w-64 min-h-screen p-4 mt-16 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden mb-4">
        <Menu className="w-6 h-6" />
      </button>
      <nav>
        <ul className="space-y-2">
          <li>
            <button onClick={() => setActiveSection('terminal')} className="w-full text-left p-2 hover:bg-gray-700 rounded flex items-center">
              <Terminal className="w-4 h-4 mr-2" /> Universal Terminal
            </button>
          </li>
          <li>
            <details>
              <summary className="p-2 hover:bg-gray-700 rounded flex items-center">
                <Cloud className="w-4 h-4 mr-2" /> Cloud Storage
              </summary>
              <ul className="ml-4 space-y-1">
                <li><button onClick={() => setActiveSection('drives')} className="p-1 hover:bg-gray-600 rounded">Unlimited Drives</button></li>
                <li><button onClick={() => setActiveSection('config')} className="p-1 hover:bg-gray-600 rounded">URL/API/Key Config</button></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="p-2 hover:bg-gray-700 rounded flex items-center">
                <Brain className="w-4 h-4 mr-2" /> AI Engines
              </summary>
              <ul className="ml-4 space-y-1">
                <li><button onClick={() => setActiveSection('engines')} className="p-1 hover:bg-gray-600 rounded">Unlimited Connect Link</button></li>
                <li><button onClick={() => setActiveSection('ghost')} className="p-1 hover:bg-gray-600 rounded">Ghost Modules</button></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="p-2 hover:bg-gray-700 rounded flex items-center">
                <Globe2 className="w-4 h-4 mr-2" /> Web & WP
              </summary>
              <ul className="ml-4 space-y-1">
                <li><button onClick={() => setActiveSection('wp')} className="p-1 hover:bg-gray-600 rounded">WP Installer</button></li>
                <li><button onClick={() => setActiveSection('builder')} className="p-1 hover:bg-gray-600 rounded">Drag-Drop Builder</button></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="p-2 hover:bg-gray-700 rounded flex items-center">
                <Settings className="w-4 h-4 mr-2" /> Hosting & DNS
              </summary>
              <ul className="ml-4 space-y-1">
                <li><button onClick={() => setActiveSection('hosting')} className="p-1 hover:bg-gray-600 rounded">Unlimited Hosting</button></li>
                <li><button onClick={() => setActiveSection('dns')} className="p-1 hover:bg-gray-600 rounded">Domains & DNS</button></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="p-2 hover:bg-gray-700 rounded flex items-center">
                <Code className="w-4 h-4 mr-2" /> Plugin Store
              </summary>
              <ul className="ml-4 space-y-1">
                <li><button onClick={() => setActiveSection('plugins')} className="p-1 hover:bg-gray-600 rounded">Unlimited Plugins</button></li>
                <li><button onClick={() => setActiveSection('social')} className="p-1 hover:bg-gray-600 rounded">Social Integrations</button></li>
              </ul>
            </details>
          </li>
          <li>
            <button onClick={() => setActiveSection('dev')} className="w-full text-left p-2 hover:bg-gray-700 rounded flex items-center">
              <Code className="w-4 h-4 mr-2" /> Dev Controls
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
