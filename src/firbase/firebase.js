import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'

// import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBaElAp2lDJHQAgXUlIUqNjqmHY_ynf48c",
  authDomain: "powermax-market.firebaseapp.com",
  projectId: "powermax-market",
  storageBucket: "powermax-market.appspot.com",
  messagingSenderId: "371190434252",
  appId: "1:371190434252:web:638430bf0a05e49289f569"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const auth= firebase.auth();

// export {auth}
export const auth = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(auth);

export const FirebaseDB = getFirestore(auth);
