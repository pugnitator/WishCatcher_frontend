import { createAsyncThunk } from "@reduxjs/toolkit";


const authorization = createAsyncThunk('/auth', async (login, password) => {
    const response = await fetch('http://localhost:3000/auth');
    return await response.json();
})

export default authorization;