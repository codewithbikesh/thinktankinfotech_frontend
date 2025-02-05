// authReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('auth_token') || null, // Retrieve token from localStorage on initialization
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    loginSuccess: (state, action) => {
      const { token } = action.payload;
      if (token) {
        localStorage.setItem('auth_token', token); // Save the token to localStorage
      }

      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: token, // Ensure token is updated
        error: null,
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    logout: (state) => {
      localStorage.removeItem('auth_token'); // Remove token from localStorage when logged out

      return {
        ...state,
        user: null,
        token: null,
        error: null,
      };
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
