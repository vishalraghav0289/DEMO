import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Welcome to Our App</h1>
        
        <div className="mb-6 flex items-center justify-center">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isLoggedIn}
              onChange={() => setIsLoggedIn(!isLoggedIn)}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {isLoggedIn ? 'Logged In' : 'Logged Out'}
            </span>
          </label>
        </div>

        <nav className="flex flex-wrap justify-center space-x-4 mb-8">
          <Link to="/about" className="text-blue-500 hover:text-blue-700">About Us</Link>
          <Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact Us</Link>
          {isLoggedIn && (
            <Link to="/api-demo" className="text-blue-500 hover:text-blue-700">API Demo</Link>
          )}
        </nav>

        <main>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Welcome to our App</h2>
          <p className="mb-4 text-gray-600">This demo showcases conditional rendering based on login state.</p>
          {isLoggedIn ? (
            <p className="text-green-600">You are logged in and have access to all features, including the API Demo.</p>
          ) : (
            <p className="text-red-600">You are not logged in. Please log in to access all features.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;