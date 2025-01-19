import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer.jsx';
import authReducer from './authReducer.jsx';  // Import your auth reducer
const rootReducer = combineReducers({
  services: servicesReducer,
  auth: authReducer,
  // Add other reducers as needed
});

export default rootReducer;
