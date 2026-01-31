
import { createSlice } from '@reduxjs/toolkit';
import type { AuthIntialState } from '../../types/AuthState';

const intialState: AuthIntialState = {
    isAuthenticated: false,
    user: null
}



const authSlice = createSlice({
    name: 'auth',
    initialState: intialState,
    reducers: {
    login(state, action) {
            state.user = action.payload.user;
            state.isAuthenticated = true;
      },
      setUser(state, action) {
            state.user = action.payload.user;
            state.isAuthenticated = true;
      },
    logout(state,) {
            state.user = null;
            state.isAuthenticated = false;
  },
  },
});

export const { login, logout, setUser } = authSlice.actions;

export default authSlice.reducer;