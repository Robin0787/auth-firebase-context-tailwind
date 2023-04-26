import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhG9dKbhV0-0lEwN4MIvNy9pWUE7Jb0Tk",
  authDomain: "auth-practice-31d94.firebaseapp.com",
  projectId: "auth-practice-31d94",
  storageBucket: "auth-practice-31d94.appspot.com",
  messagingSenderId: "824911171369",
  appId: "1:824911171369:web:226b0a3d48e879ddc53138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;