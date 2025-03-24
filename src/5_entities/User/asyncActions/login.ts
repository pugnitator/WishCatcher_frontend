import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegistrationProp } from './registration';

const login = createAsyncThunk(
  '/auth',
  async ({ login, password }: RegistrationProp, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        console.log('Aщибка в response');
        const error = await response.json();
        return rejectWithValue(
          `Ошибка регистрации: ${error.message || 'Неизвестная ошибка'}`
        );
      }

      return await response.json();
    } catch (e) {
        console.log(`Ошибка входа, ${String(e)}`);
        return rejectWithValue(`Ошибка входа, ${String(e)}`);
    }
  }
);

export default login;
