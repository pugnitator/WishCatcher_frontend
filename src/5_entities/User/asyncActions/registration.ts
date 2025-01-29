import { createAsyncThunk } from "@reduxjs/toolkit";

const registration = createAsyncThunk('/registration', async () => {
    const response = await fetch('http://localhost:3000/registration');
    return await response.json();
})

export default registration;