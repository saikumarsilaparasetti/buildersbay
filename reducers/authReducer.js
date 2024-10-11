const initialState = {
    token: null,    // JWT token
    user: null,     // User details (e.g., username, email, etc.)
    isAuthenticated: false,  // Auth state
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':  // Action for successful login
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
          isAuthenticated: true,
        };
      
      case 'LOGOUT':  // Action for logging out
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
        };
      
      default:
        return state;
    }
  };
  
  export default authReducer;
  