import axios from 'axios';

// Login API Action
export const loginUser = (loginData) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });

  try {
    const response = await axios.post(
      'https://api.thinktankinfotech.com/api/login',  // Your actual login endpoint
      loginData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Store token in localStorage if login is successful
    const { token } = response.data;
    localStorage.setItem('auth_token', token);

    // Dispatch the success action with the response data
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    // Dispatch the failure action with error details
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.response?.data?.message || error.message,
    });

    console.error('Error logging in:', error);
  }
};

// Logout Action (To remove token when logging out)
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('auth_token');

  // Dispatch the logout action
  dispatch({ type: 'LOGOUT' });
};
