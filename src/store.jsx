// store.js

import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Import redux-thunk correctly
import rootReducer from './components/admin/reducers/index.jsx'; // Adjust path as needed

// Create the Redux store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
