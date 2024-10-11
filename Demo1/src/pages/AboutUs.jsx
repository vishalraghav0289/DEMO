import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4 text-gray-600">We are a company dedicated to providing excellent service and innovative solutions.</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Home</Link>
      </div>
    </div>
  );
}

export default AboutUs;