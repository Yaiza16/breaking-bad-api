import { configureStore } from '@reduxjs/toolkit';
import character from './features/character/characterSlice';

export default configureStore({
  reducer: {
    character,
  },
});
