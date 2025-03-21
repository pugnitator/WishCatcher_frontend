import { createSlice } from "@reduxjs/toolkit";
import userInitialState from "./model/UserInitialState";
import authorization from "./asyncActions/authorization";
import registration from "./asyncActions/registration";

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
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(authorization.pending, () => {
          //лоадер?
        })
        .addCase(authorization.fulfilled, (state, action) => {
          state.isLogin = true;
          state.currentUser = action.payload;
        })
        .addCase(authorization.rejected, (state, action) => {
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