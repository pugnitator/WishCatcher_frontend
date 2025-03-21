import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppContext } from '../../../1_app/App';
import { useContext } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import authorization from './authorization';

export interface RegistrationProp {
  login: string;
  password: string;
}

const registration = createAsyncThunk(
  '/registration',
  async ({ login, password }: RegistrationProp, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        console.log('Aщибка');
        const error = await response.json();
        return rejectWithValue(
          `Ошибка регистрации: ${error.message || 'Неизвестная ошибка'}`
        );
      }
      
      return await response.json();
    } catch (error) {
      console.log(`Ошибка регистрации, ${String(error)}`);
      return rejectWithValue(`Ошибка регистрации, ${String(error)}`);
    }
  }
);

export default registration;
