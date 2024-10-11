import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">User Management</h1>
      <nav className="flex justify-center space-x-4 mb-8">
        <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/users" className="text-blue-500 hover:text-blue-700">Users</Link>
            <button onClick={logout} className="text-blue-500 hover:text-blue-700">Logout</button>
          </>
        ) : (
          <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
        )}
      </nav>
      <main className="bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Welcome to User Management</h2>
        <p>This is a simple user management system.</p>
      </main>
    </div>
  );
}