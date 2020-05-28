import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBMfNzkZiLqeubZZXZkYJ4AIQO145aNdG8",
  authDomain: "wily-app-74ca3.firebaseapp.com",
  databaseURL: "https://wily-app-74ca3.firebaseio.com",
  projectId: "wily-app-74ca3",
  storageBucket: "wily-app-74ca3.appspot.com",
  messagingSenderId: "993902041564",
  appId: "1:993902041564:web:06dc41e6508743e7e11719"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();