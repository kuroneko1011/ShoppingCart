import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyDHgIAoNIvdZONmKWggIkzYY_0dWS-a5Q8",
  authDomain: "shoppingcart-b9e27.firebaseapp.com",
  projectId: "shoppingcart-b9e27",
  storageBucket: "shoppingcart-b9e27.appspot.com",
  messagingSenderId: "225145814911",
  appId: "1:225145814911:web:1ca97ca729cf9262d4a44a",
  measurementId: "G-6ZN6YV53LC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //access to the GoogleAuthProvider class from auth library
provider.setCustomParameters({prompt: 'select_account'}); //trigger the Google pop-ups whenever we use GoogleAuthProvider
export const signInWithGoogle = () => auth.signInWithPopup(provider); //signInWithPopup  

export default firebase;