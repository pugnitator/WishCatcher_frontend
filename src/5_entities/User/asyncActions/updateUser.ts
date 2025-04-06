import { createAsyncThunk } from '@reduxjs/toolkit';

export interface UpdateUserProp {
  login?: string;
  name?: string;
  friends?: string[];
}

const updateUser = createAsyncThunk(
  '/updateUser',
  async (editedUser: UpdateUserProp, { rejectWithValue }) => {
    const token = sessionStorage.getItem('authToken');

    try {
      const response = await fetch(`/api/updateUser`, {
        method: 'PUT',
        body: JSON.stringify(editedUser),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Ошибка запроса');

      const data = await response.json();
      return data.user;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export default updateUser;
