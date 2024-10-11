import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import { store } from './feature/auth/store';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root'); // Get the root element
const root = createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);