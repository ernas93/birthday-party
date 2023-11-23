// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDo4kZwYfmcyAZcIvDTCMJli1NoMYl-kAk',
  authDomain: 'birthday-6cde2.firebaseapp.com',
  projectId: 'birthday-6cde2',
  storageBucket: 'birthday-6cde2.appspot.com',
  messagingSenderId: '668017050313',
  appId: '1:668017050313:web:b0cee25eb4c6b648c08318',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
