import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/authSlice'
// Create the Redux store and pass in the reducer
const store = configureStore({
  reducer: {
    auth: authReducer,  // Add your reducers here
  },
});

export default store;
