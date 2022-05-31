import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA2DM6FSUHcg3ynj40slQOLBVSOdXovAYo",
    authDomain: "zee-training.firebaseapp.com",
    projectId: "zee-training",
    storageBucket: "zee-training.appspot.com",
    messagingSenderId: "940558506584",
    appId: "1:940558506584:web:19e21d56e7be9d48e6c82d",
    measurementId: "G-Y8Q0YP8CFV"
})

export const db = app.firestore();

export default app;