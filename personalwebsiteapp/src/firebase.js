import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Your Firebase configuration object will go here
  // You'll need to create a Firebase project and add the config here
  apiKey: "AIzaSyBkprQUno9OBK-flutcklvje0yuN5kKDO0",
  authDomain: "personalwebsite1-b4455.firebaseapp.com",
  databaseURL: "https://personalwebsite1-b4455-default-rtdb.firebaseio.com/",
  projectId: "personalwebsite1-b4455",
  storageBucket: "personalwebsite1-b4455.firebasestorage.app",
  messagingSenderId: "376407918671D",
  appId: "1:376407918671:web:29f8027dcdd5988ac6c23a"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); 