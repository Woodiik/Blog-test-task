import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import app from 'firebaseInit/firebaseInit';

const auth = getAuth(app);

const database = getDatabase(app);

const databaseRef = ref(database);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, ThunkAPI) => {
    try {
      // Створіть нового користувача в базі даних Firebase
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      // Отримайте ID новоствореного користувача
      const user = auth.currentUser;
      const userId = user.uid;

      // Збережіть інші дані користувача в базі даних
      await set(ref(databaseRef, `users/${userId}`), {
        email: credentials.email,
        // Додайте інші дані користувача, які вам потрібно
      });

      return { user };
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, ThunkAPI) => {
    try {
      // Автентифікація користувача за допомогою Firebase
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      return { user: auth.currentUser };
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
    // Вийдіть з облікового запису за допомогою Firebase
    await signOut(auth);

    return {};
  } catch (error) {
    return ThunkAPI.rejectWithValue(error);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, ThunkAPI) => {
    try {
      // Отримайте поточного користувача з Firebase, якщо він автентифікований
      const user = auth.currentUser;

      if (user) {
        return { user };
      } else {
        return ThunkAPI.rejectWithValue();
      }
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
