import axios from 'axios';

// Base URL for your API
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// Ensure credentials (cookies) are sent with requests
axios.defaults.withCredentials = true;

// Retrieve token from localStorage and set Authorization header
const token = localStorage.getItem('auth_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Export Axios for use in other files
export default axios;
