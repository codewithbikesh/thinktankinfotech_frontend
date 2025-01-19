import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {  thunk } from 'redux-thunk'; // Import redux-thunk correctly
import rootReducer from './components/admin/reducers/index.jsx';
import App from './App.jsx';
import './components/admin/css/style.css';
import './components/admin/css/satoshi.css';
import './index.css';

// Create the Redux store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Render the app with the Provider to pass the Redux store
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
