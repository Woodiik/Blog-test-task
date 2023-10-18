// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFFq1pr7L7OaY5q3QRc_xVs5qih5O0Zus',
  authDomain: 'blog-36b29.firebaseapp.com',
  projectId: 'blog-36b29',
  storageBucket: 'blog-36b29.appspot.com',
  messagingSenderId: '231915290114',
  appId: '1:231915290114:web:b3e6a918a9143061b9f11b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
