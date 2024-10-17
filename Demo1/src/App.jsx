import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './feature/auth/store';
import Home from './pages/Home';
import ApiDemo from './pages/ApiDemo';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContractUs';
import { useAuth } from './Hooks/auth';
import DemoPage from './pages/DemoPage';

function App() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} login={login} logout={logout} />} />
            <Route 
              path="/api-demo" 
              element={isLoggedIn ? <ApiDemo /> : <Navigate to="/" replace />} 
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/demopage" element={<DemoPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;