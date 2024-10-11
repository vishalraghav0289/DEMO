import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomUser, postData, putData, deleteData } from '../feature/auth/apiSlice';

function ApiDemo() {
  const dispatch = useDispatch();
  const { user, postResponse, putResponse, deleteResponse, loading, error } = useSelector(state => state.api);

  const handleGetUser = () => {
    dispatch(getRandomUser());
  };

  const handlePostData = () => {
    dispatch(postData({ message: 'Hello, API!' }));
  };

  const handlePutData = () => {
    dispatch(putData({ message: 'Updated data' }));
  };

  const handleDeleteData = () => {
    dispatch(deleteData());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">API Demo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">GET Random User</h2>
          <button
            onClick={handleGetUser}
            className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
          >
            Get Random User
          </button>
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {user && (
            <div className="mt-4">
              <p className="text-sm sm:text-base"><span className="font-semibold">Name:</span> {user.name}</p>
              <p className="text-sm sm:text-base"><span className="font-semibold">Email:</span> {user.email}</p>
            </div>
          )}
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">POST Data</h2>
          <button
            onClick={handlePostData}
            className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
          >
            Post Data
          </button>
          {postResponse && <p className="text-sm sm:text-base mt-4">Response: {JSON.stringify(postResponse)}</p>}
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">PUT Data</h2>
          <button
            onClick={handlePutData}
            className="w-full sm:w-auto bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mb-4"
          >
            Put Data
          </button>
          {putResponse && <p className="text-sm sm:text-base mt-4">Response: {JSON.stringify(putResponse)}</p>}
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">DELETE Data</h2>
          <button
            onClick={handleDeleteData}
            className="w-full sm:w-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-4"
          >
            Delete Data
          </button>
          {deleteResponse && <p className="text-sm sm:text-base mt-4">Response: {JSON.stringify(deleteResponse)}</p>}
        </div>
      </div>
    </div>
  );
}

export default ApiDemo;