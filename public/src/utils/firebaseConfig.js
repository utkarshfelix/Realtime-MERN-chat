import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVhHbyR81sFFDa5Dmk0T0eao4L1C50TO4",
    authDomain: "syncchat-73fe3.firebaseapp.com",
    projectId: "syncchat-73fe3",
    storageBucket: "syncchat-73fe3.appspot.com",
    messagingSenderId: "555982391820",
    appId: "1:555982391820:web:c533b3960f18c1f0183c29",
    measurementId: "G-MTKDFBYYWK"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);