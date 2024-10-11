import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './feature/auth/store';
import Home from './pages/Home';
import ApiDemo from './pages/ApiDemo';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContractUs';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api-demo" element={<ApiDemo />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;