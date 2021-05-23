import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCnfRLcuZ-lF1ZT3qDuZDNbMGbrTqPRoLo",
    authDomain: "netflixclone-5823b.firebaseapp.com",
    projectId: "netflixclone-5823b",
    storageBucket: "netflixclone-5823b.appspot.com",
    messagingSenderId: "776925113503",
    appId: "1:776925113503:web:d6a9e735ce0b7d8ff686aa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
//  console.log(firebaseApp.firestore)
    const auth=firebaseApp.auth()
     const db=firebaseApp.firestore()
    export  {auth,db}
