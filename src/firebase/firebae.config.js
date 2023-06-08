// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNV0KaLS8lX3jsArs9pXqFa1y8clZki_o",
    authDomain: "pic-camp-academy.firebaseapp.com",
    projectId: "pic-camp-academy",
    storageBucket: "pic-camp-academy.appspot.com",
    messagingSenderId: "394333448188",
    appId: "1:394333448188:web:53657aea58feb8fe5f3479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app