
import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './features/character/characterSlice';

export default configureStore({
  reducer: {
    character: characterSlice,
  },
});
