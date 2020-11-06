import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNPTKXBFBa1TyXn8Gs2THiHHzHvIaGuDU",
    authDomain: "airbnb-clone-17f3b.firebaseapp.com",
    databaseURL: "https://airbnb-clone-17f3b.firebaseio.com",
    projectId: "airbnb-clone-17f3b",
    storageBucket: "airbnb-clone-17f3b.appspot.com",
    messagingSenderId: "503086405723",
    appId: "1:503086405723:web:44289af923a74477b7077e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();