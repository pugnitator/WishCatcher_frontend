import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegistrationProp } from './registration';

const login = createAsyncThunk(
  '/auth',
  async ({ login, password }: RegistrationProp, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(
          `Ошибка входа: ${error.message || 'Неизвестная ошибка'}`
        );
      }

      return await response.json();
    } catch (e) {
        return rejectWithValue(`Ошибка входа, ${String(e)}`);
    }
  }
);

export default login;
