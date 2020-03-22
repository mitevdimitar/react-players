import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDjsPT0rbE6TOwtzXCAvGxIZtTgRyxIbXI",
  authDomain: "players-c7ea6.firebaseapp.com",
  databaseURL: "https://players-c7ea6.firebaseio.com",
  projectId: "players-c7ea6",
  storageBucket: "players-c7ea6.appspot.com",
  messagingSenderId: "560866261990",
  appId: "1:560866261990:web:4b653574fc5e5cf7f1f427",
  measurementId: "G-0RFNZW6726"
};

firebase.initializeApp(firebaseConfig);

export default firebase;