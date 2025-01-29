import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './User/userSlice';

const rootReducer = combineReducers({
    'user': userReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;
export type RootState = ReturnType<typeof store.getState>;