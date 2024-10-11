import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomUser, postData, putData, deleteData } from '../feature/auth/apiSlice';

function ApiDemo() {
  const dispatch = useDispatch();
  const { user, postResponse, putResponse, deleteResponse, loading, error } = useSelector(state => state.api);

  const handleGetUser = () => dispatch(getRandomUser());
  const handlePostData = () => dispatch(postData({ message: 'Hello, API!' }));
  const handlePutData = () => dispatch(putData({ message: 'Updated data' }));
  const handleDeleteData = () => dispatch(deleteData());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">API Demo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ApiCard title="GET Random User" buttonColor="blue" onClick={handleGetUser}>
          <button
            onClick={handleGetUser}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Get Random User
          </button>
          {loading && <p className="mt-4 text-gray-600">Loading...</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
          {user && (
            <div className="mt-4">
              <p className="text-gray-800"><span className="font-semibold">Name:</span> {user.name?.first} {user.name?.last}</p>
              <p className="text-gray-800"><span className="font-semibold">Email:</span> {user.email}</p>
            </div>
          )}
        </ApiCard>
        <ApiCard title="POST Data" buttonColor="green" onClick={handlePostData}>
          <button
            onClick={handlePostData}
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Post Data
          </button>
          {postResponse && <p className="mt-4 text-gray-800">Response: {JSON.stringify(postResponse)}</p>}
        </ApiCard>
        <ApiCard title="PUT Data" buttonColor="yellow" onClick={handlePutData}>
          <button
            onClick={handlePutData}
            className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
          >
            Put Data
          </button>
          {putResponse && <p className="mt-4 text-gray-800">Response: {JSON.stringify(putResponse)}</p>}
        </ApiCard>
        <ApiCard title="DELETE Data" buttonColor="red" onClick={handleDeleteData}>
          <button
            onClick={handleDeleteData}
            className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Delete Data
          </button>
          {deleteResponse && <p className="mt-4 text-gray-800">Response: {JSON.stringify(deleteResponse)}</p>}
        </ApiCard>
      </div>
    </div>
  );
}

function ApiCard({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      {children}
    </div>
  );
}

export default ApiDemo;