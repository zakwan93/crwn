import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDtdqSIYq0Pwjkalf4py4ca5m6HPzCRB1Q",
  authDomain: "crwn-data.firebaseapp.com",
  databaseURL: "https://crwn-data.firebaseio.com",
  projectId: "crwn-data",
  storageBucket: "",
  messagingSenderId: "179731580512",
  appId: "1:179731580512:web:fd7e78856c912ebd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
