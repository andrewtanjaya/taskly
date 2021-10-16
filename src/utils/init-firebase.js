
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAzEXcb5YJwSV4fEvOnlDBWI18U12cKOpY",
  authDomain: "taskly-57312.firebaseapp.com",
  projectId: "taskly-57312",
  storageBucket: "taskly-57312.appspot.com",
  messagingSenderId: "282474733141",
  appId: "1:282474733141:web:5e0d08b39e3d5e27fcbedc"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

