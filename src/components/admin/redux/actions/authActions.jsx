// authActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axiosConfig';

// Async thunk for login action
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginData, { dispatch }) => {
    try {
      const response = await axios.post('/login', loginData);
      const { access_token: token } = response.data;
      
      // Store the token in localStorage
      localStorage.setItem('auth_token', token);

      // Set the token in Axios default headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return response.data;
    } catch (error) {
      // Handle error scenarios
      throw new Error(error.message);
    }
  }
);

// Standard action creator for logout
export const logoutUser = () => {
  // Remove token from localStorage
  localStorage.removeItem('auth_token');

  // Remove the token from Axios default headers
  delete axios.defaults.headers.common['Authorization'];

  return {
    type: 'auth/logout',
  };
};
