import React, { useState } from 'react';

function DemoPage() {
  const [loginMethod, setLoginMethod] = useState('clientId');

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-blend-overlay">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-yellow-600 text-center mb-2">Maggie Masala</h1>
        <p className="text-gray-600 text-center mb-6">Welcome to Maggie Masala! Login to get a packet of Maggie Masala.</p>

        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 ${loginMethod === 'clientId' ? 'bg-yellow-200' : 'bg-gray-200'}`}
            onClick={() => setLoginMethod('clientId')}
          >
            Use Client ID
          </button>
          <button
            className={`flex-1 py-2 ${loginMethod === 'email' ? 'bg-yellow-200' : 'bg-gray-200'}`}
            onClick={() => setLoginMethod('email')}
          >
            Use Email ID
          </button>
        </div>

        {loginMethod === 'clientId' ? (
          <div className="space-y-4 mb-4">
            <input type="text" placeholder="Your Client ID" className="w-full p-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          </div>
        ) : (
          <div className="space-y-4 mb-4">
            <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          </div>
        )}

        <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
          Login
        </button>

        <p className="text-center text-sm text-gray-600 my-4">
          Don't have an account? <a href="#" className="text-yellow-600 hover:underline">Create an account</a>
        </p>

        <div className="space-y-2">
          <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center">
            <img src="/placeholder.svg?height=24&width=24" alt="Google logo" className="w-6 h-6 mr-2" />
            Login with Google
          </button>
          <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center">
            <img src="/placeholder.svg?height=24&width=24" alt="Facebook logo" className="w-6 h-6 mr-2" />
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoPage;