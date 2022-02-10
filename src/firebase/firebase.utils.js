import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
