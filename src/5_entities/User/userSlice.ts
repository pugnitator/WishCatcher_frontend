import { createSlice } from "@reduxjs/toolkit";
import userInitialState from "./model/UserInitialState";
import authorization from "./asyncActions/authorization";



const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
      setUser(state, action) {
        state.currentUser = action.payload;
      },
      removeUser(state, action) {
        state.currentUser = null;
      }

    },
    extraReducers: (builder) => {
      builder
        .addCase(authorization.pending, () => {
          //лоадер?
        })
        .addCase(authorization.fulfilled, (state, action) => {
          state.currentUser = action.payload;
        })
    }

})

export const userSliceActions = userSlice.actions;
export const userReducer = userSlice.reducer;