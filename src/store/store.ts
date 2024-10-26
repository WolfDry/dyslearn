import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/authReducer'
import { parentReducer } from './reducers/parentReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    parent: parentReducer
  },
});
