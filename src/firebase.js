// import firebase from 'firebase';
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCvok1xjlBBnZMuPmlDIiUUBV0tatRLufE",
    authDomain: "netflix-clone-ff985.firebaseapp.com",
    projectId: "netflix-clone-ff985",
    storageBucket: "netflix-clone-ff985.appspot.com",
    messagingSenderId: "462622509016",
    appId: "1:462622509016:web:771f55a31a05777149d4ad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// onAuthStateChanged(auth, user => { /* check status */ });


export { auth };
export default db;
