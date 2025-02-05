import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './components/admin/redux/store/store'; // Import the Redux store configuration
import App from './App.jsx'; // Adjust path as needed
import './components/admin/css/style.css';
import './components/admin/css/satoshi.css';
import './index.css';

// Render the app with the Provider to pass the Redux store
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
