import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer';
import userReducer from '../reducers/userReducer';
import dataReducer from '../reducers/dataReducer';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    data: dataReducer
  },
  middleware:[thunk, logger]
});
