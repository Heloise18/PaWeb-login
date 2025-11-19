// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLD-p6h-21o8y5EOw2H9Dn-7RFC3xAwjM",
  authDomain: "helodb-d07f2.firebaseapp.com",
  projectId: "helodb-d07f2",
  storageBucket: "helodb-d07f2.firebasestorage.app",
  messagingSenderId: "991517828030",
  appId: "1:991517828030:web:9af947659714decfd1cfef",
  measurementId: "G-5VQ3BDF1L5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);