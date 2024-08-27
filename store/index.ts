import {configureStore} from '@reduxjs/toolkit';
import presonSlice from './presonSlice';

const store = configureStore({
  reducer: {
    preson: presonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
