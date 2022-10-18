// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSYAwkqCi7AvBgKBfECVQqpMzrggeGMng",
    authDomain: "car-servises-90be3.firebaseapp.com",
    projectId: "car-servises-90be3",
    storageBucket: "car-servises-90be3.appspot.com",
    messagingSenderId: "842067947650",
    appId: "1:842067947650:web:87ca216a012d9a6d58449b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;