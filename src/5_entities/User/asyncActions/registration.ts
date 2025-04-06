import { createAsyncThunk } from '@reduxjs/toolkit';

export interface RegistrationProp {
  login: string;
  password: string;
}

const registration = createAsyncThunk(
  '/registration',
  async ({ login, password }: RegistrationProp, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(
          `Ошибка регистрации: ${error.message || 'Неизвестная ошибка'}`
        );
      }
      
      return await response.json();
    } catch (e) {
      return rejectWithValue(`Ошибка, ${String(e)}`);
    }
  }
);

export default registration;
