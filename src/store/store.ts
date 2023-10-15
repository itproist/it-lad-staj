import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slice/posts';
import { authReducer } from './slice/users';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
