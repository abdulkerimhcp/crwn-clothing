
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config =  {
    apiKey: "AIzaSyAjeCopiJ2Cb0r5rEAohXmRZytw-r1yeiE",
    authDomain: "crwn-db-cf2eb.firebaseapp.com",
    projectId: "crwn-db-cf2eb",
    storageBucket: "crwn-db-cf2eb.appspot.com",
    messagingSenderId: "1013428980578",
    appId: "1:1013428980578:web:d175e1c96b35557f4a7a3b",
    measurementId: "G-8KGGLG63B2"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;