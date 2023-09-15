import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import { taskReducer } from './TaskReducer';
import { userReducer } from './UserReducer';

const reducers = combineReducers({
  taskReducer,
  userReducer
})

export default configureStore({
  reducer: reducers,
})