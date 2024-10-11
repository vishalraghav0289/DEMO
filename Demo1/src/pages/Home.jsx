import React from 'react';

function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="text-center mb-8 max-w-screen-lg w-full px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
          Manage Users with Ease
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-4">
          A simple user management system for your organization
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-base sm:text-lg hover:bg-green-600">
          Register
        </button>
        <button className="bg-white text-blue-600 border-2 border-blue-600 py-3 px-6 rounded-lg text-base sm:text-lg hover:bg-blue-50">
          Skip and Move On
        </button>
      </div>
    </div>
  );
}

export default Home;
