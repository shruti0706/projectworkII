import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD1GKvKXVuHg6sqOVDyBxKEoWB8q91PraM",
    authDomain: "learningvuejs-129cb.firebaseapp.com",
    projectId: "learningvuejs-129cb",
    storageBucket: "learningvuejs-129cb.appspot.com",
    messagingSenderId: "169958957586",
    appId: "1:169958957586:web:c86bbc2ee6f11b26d9eecb",
    measurementId: "G-YYB9DJM0FJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
