// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxtAnfkawxCb8Fkc3zY_FhiA0UbzT81H4",
  authDomain: "teadopto-be90a.firebaseapp.com",
  projectId: "teadopto-be90a",
  storageBucket: "teadopto-be90a.appspot.com",
  messagingSenderId: "820121034876",
  appId: "1:820121034876:web:e2b57b3fde745e8d42e9f9",
  measurementId: "G-F6GRHLJ9FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);