import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGYILvAShL7Oc4W2LI9AKvvgy10r-M5rU",
  authDomain: "mern0921-eee41.firebaseapp.com",
  projectId: "mern0921-eee41",
  storageBucket: "mern0921-eee41.appspot.com",
  messagingSenderId: "438198145721",
  appId: "1:438198145721:web:00c1092caaf94e9d3f0168"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;