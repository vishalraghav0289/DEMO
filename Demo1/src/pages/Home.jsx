import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">API Demo Home</h1>
      <nav className="flex justify-center space-x-4 mb-8">
        <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
        <Link to="/api-demo" className="text-blue-500 hover:text-blue-700">API Demo</Link>
      </nav>
      <main className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Welcome to the API Demo</h2>
        <p className="mb-4">This demo showcases different API calls using Redux Toolkit and Axios.</p>
        <Link to="/api-demo" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go to API Demo
        </Link>
      </main>
    </div>
  );
}

export default Home;