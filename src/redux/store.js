import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';

const rootReducedr = combineReducers({
  auth: authReducer
})

const store = configureStore({
  reducer: rootReducedr
})

export default store;