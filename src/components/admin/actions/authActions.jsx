// Login and Logout Actions
import axios from './axiosConfig'; // Use the centralized Axios configuration

// Login API Action
export const loginUser = (loginData) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });

  try {
    const response = await axios.post('/login', loginData);
    const { access_token: token } = response.data;
      
    // Store the token in localStorage
    localStorage.setItem('auth_token', token);

    // Set the token in Axios default headers
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.message,
    });
  }
};

// Logout Action (To remove token when logging out)
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('auth_token');

  // Remove the token from Axios default headers
  delete axios.defaults.headers.common['Authorization'];

  // Dispatch the logout action
  dispatch({ type: 'LOGOUT' });
};
