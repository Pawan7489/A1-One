import React, { useState } from 'react';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-4">A1 System Login</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded" 
        />
        <button 
          onClick={handleLogin} 
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <a href="#" className="text-blue-400 mt-2 block">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
