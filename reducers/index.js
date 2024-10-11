import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  userReducer, // Add your app's reducers here
  auth: authReducer
});

export default rootReducer;
