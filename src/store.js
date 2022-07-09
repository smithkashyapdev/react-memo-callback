import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/index';
export default configureStore({
  reducer: {
    calculator: counterReducer,
  },
});
