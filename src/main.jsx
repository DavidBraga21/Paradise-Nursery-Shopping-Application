// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Adjust the import path as needed
import App from './App'; // Your main app component

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with the Provider component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
