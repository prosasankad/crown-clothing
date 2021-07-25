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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
   // console.log(firestore.doc('users/128dfasfdaf'))
   console.log(snapShot);

   if(!snapShot.exists){
       const { displayName, email } = userAuth;
       const createdAt = new Date();

       try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
       }catch (error){
            console.log('error creating user', error.message);
       }
   }

   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;