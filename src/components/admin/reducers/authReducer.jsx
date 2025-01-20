const initialState = {
  user: null,
  token: localStorage.getItem('auth_token') || null,  // Retrieve token from localStorage on initialization
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'LOGIN_SUCCESS':
      // Store token in localStorage when login is successful
      const { token } = action.payload;
      if (token) {
        localStorage.setItem('auth_token', token);  // Save the token to localStorage
      }

      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: token,  // Ensure token is updated
        error: null,
      };

    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      
    case 'LOGOUT':
      // Remove token from localStorage when logged out
      localStorage.removeItem('auth_token');

      return {
        ...state,
        user: null,
        token: null,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
