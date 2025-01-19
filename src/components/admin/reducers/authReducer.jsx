const initialState = {
    user: null,
    token: localStorage.getItem('auth_token') || null,
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
        return {
          ...state,
          loading: false,
          user: action.payload.user,
          token: action.payload.token,
          error: null,
        };
  
      case 'LOGIN_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case 'LOGOUT':
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
  