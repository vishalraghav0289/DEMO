import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/User';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/users" 
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;