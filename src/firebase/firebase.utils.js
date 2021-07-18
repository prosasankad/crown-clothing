import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6dgE8lY0HSpeBGDhogYscT-SN14-mKoA",
    authDomain: "crwn-db-a74ae.firebaseapp.com",
    projectId: "crwn-db-a74ae",
    storageBucket: "crwn-db-a74ae.appspot.com",
    messagingSenderId: "602976074415",
    appId: "1:602976074415:web:842bd63a073c52ef07325a",
    measurementId: "G-FT3GS8K3HM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;