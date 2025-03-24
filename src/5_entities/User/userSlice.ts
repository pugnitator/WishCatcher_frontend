import { createSlice } from "@reduxjs/toolkit";
import userInitialState from "./model/UserInitialState";
import login from "./asyncActions/login";
import registration from "./asyncActions/registration";

const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
      setUser(state, action) {
        state.isLogin = true;
        state.currentUser = action.payload;
        console.log(action.payload);
        console.log(state)
      },
      removeUser(state) {
        state.isLogin = false;
        state.currentUser = null;
      }
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

        .addCase(registration.pending, () => {
          //лоадер
        })
        .addCase(registration.fulfilled, (state, action) => {
          console.log('Регистрация прошла успешно', action.payload);
        })
        .addCase(registration.rejected, (state, action) => {
          console.error('Ошибка регистрации:', action.payload);
      });
        
    }

})

export const userSliceActions = userSlice.actions;
export const userReducer = userSlice.reducer;