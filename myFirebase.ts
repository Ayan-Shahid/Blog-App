import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCPME9tM8uE-zqYtg4QFJN-URxN5k9vpgc",
	authDomain: "blog-app-54585.firebaseapp.com",
	projectId: "blog-app-54585",
	storageBucket: "blog-app-54585.appspot.com",
	messagingSenderId: "468469157758",
	appId: "1:468469157758:web:b96b34d4b7dec917d82d2f",
	measurementId: "G-ZDGVD19F5B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore();
export const storage = getStorage();
