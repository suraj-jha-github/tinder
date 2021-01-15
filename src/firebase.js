
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBc8OHrDznG0GoHvFKzECQLSNyQt8POsBI",
    authDomain: "tinder-clone-62e11.firebaseapp.com",
    projectId: "tinder-clone-62e11",
    storageBucket: "tinder-clone-62e11.appspot.com",
    messagingSenderId: "906315707750",
    appId: "1:906315707750:web:48c9fac3e4c9bdb08684a7",
    measurementId: "G-1CX5W43WRF"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const database=firebaseApp.firestore();

  export default database;