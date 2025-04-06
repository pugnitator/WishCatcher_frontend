import { createSlice } from '@reduxjs/toolkit';
import userInitialState from './model/UserInitialState';
import login from './asyncActions/login';
import registration from './asyncActions/registration';
import updateUser from './asyncActions/updateUser';

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser(state, action) {
      state.isLogin = true;
      state.currentUser = action.payload;
    },
    removeUser(state) {
      state.isLogin = false;
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, () => {
        //лоадер?
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLogin = true;
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        console.error('Ошибка авторизации:', action.payload);
      })
// ----
      .addCase(registration.pending, () => {
        //лоадер
      })
      .addCase(registration.fulfilled, (state, action) => {
        console.log('Регистрация прошла успешно', action.payload);
      })
      .addCase(registration.rejected, (state, action) => {
        console.error('Ошибка регистрации:', action.payload);
      })
// ----
      .addCase(updateUser.pending, (state) => {
        //лоадер
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        console.error('Ошибка обновления пользователя:', action.payload);
      });
  },
});

export const userSliceActions = userSlice.actions;
export const userReducer = userSlice.reducer;
