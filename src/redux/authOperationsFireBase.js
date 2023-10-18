import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from 'firebaseInit/firebaseInit';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, ThunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const user = userCredential.user;
      return user;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, ThunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const user = userCredential.user;
      return user;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
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
      const state = ThunkAPI.getState();
      const persistedToken = state.auth.token;
      if (!persistedToken) {
        return ThunkAPI.rejectWithValue();
      }

      const user = await getCurrentUser(auth);

      if (user) {
        return user;
      }
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

async function getCurrentUser(auth) {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Користувач не автентифікований.'));
      }
    });
  });
}
