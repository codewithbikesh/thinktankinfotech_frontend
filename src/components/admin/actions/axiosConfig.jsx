import axios from 'axios';

// Base URL for your API
axios.defaults.baseURL = 'https://api.thinktankinfotech.com/api';

// Ensure credentials (cookies) are sent with requests
axios.defaults.withCredentials = true;

// Retrieve token from localStorage and set Authorization header
const token = localStorage.getItem('auth_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Export Axios for use in other files
export default axios;
