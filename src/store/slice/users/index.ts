import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../api/index';

interface AuthState {
  data: any;
  status: 'loading' | 'loaded' | 'error';
}

const initialState: AuthState = { data: null, status: 'loading' };

export const fetchAuth = createAsyncThunk('auth/fetchUserData', async (params) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');
  return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/auth/register', params);
  return data;
});

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  const { data } = await axios.get('/users');
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { clearUserData: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state: any) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuth.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state: any) => {
        state.status = 'error';
        state.data = null;
      })
      .addCase(fetchAuthMe.pending, (state: any) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state: any) => {
        state.status = 'error';
        state.data = null;
      })
      .addCase(fetchRegister.pending, (state: any) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state: any) => {
        state.status = 'error';
        state.data = null;
      })
      .addCase(fetchUser.pending, (state: any) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchUser.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state: any) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const { clearUserData } = authSlice.actions;

export const selectIsAuth = (state: any): boolean => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
