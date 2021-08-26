import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAuth, signUpAuth } from '../interface/auth.api';

const initialState = {
  error: null,
  loading: false,
  token: null,
  userData: null,
};

export const loginAsync = createAsyncThunk('auth/login', async (payload) => {
  const response = await loginAuth(payload);
  return response;
});

export const signUpAsync = createAsyncThunk('auth/signup', async (payload) => {
  const response = await signUpAuth(payload);
  return response;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        state.token = action.payload;
      }
    },
  },
  extraReducers: {
    [loginAsync.pending]: (state) => {
      state.loading = true;
    },
    [loginAsync.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      if (action.payload) {
        if (action.payload.message) {
          state.error = action.message;
        } else {
          state.userData = {
            name: action.payload.name,
            email: action.payload.email,
            isAdmin: action.payload.isAdmin,
            id: action.payload._id,
          };
        }
      }
    },
    [loginAsync.rejected]: (state) => {
      state.loading = false;
      state.error = 'Something went wrong, Please try again';
    },
    [signUpAsync.pending]: (state) => {
      state.loading = true;
    },
    [signUpAsync.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action);
      if (action.payload) {
        if (action.payload.message) {
          state.error = action.message;
        } else {
          state.userData = {
            name: action.payload.name,
            email: action.payload.email,
            isAdmin: action.payload.isAdmin,
            id: action.payload._id,
          };
        }
      }
    },
    [signUpAsync.rejected]: (state) => {
      state.loading = false;
      state.error = 'Something went wrong, Please try again';
    },
  },
});

export const { setToken } = authSlice.actions;

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
