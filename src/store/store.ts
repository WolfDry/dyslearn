import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/authReducer'
import { parentReducer } from './reducers/parentReducer'
import { pathReducer } from './reducers/pathReducer'
import { typoReducer } from './reducers/typoReducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    parent: parentReducer,
    path: pathReducer,
    typo: typoReducer,
  },
});
