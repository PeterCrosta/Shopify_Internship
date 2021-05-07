import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/analytics';

// import secrets from './secrets';
// // import serviceAccount from './firebase-token.json'
// import secrets from './secrets'

// // //================Firstore Setup===========================

const config = {
    apiKey: "AIzaSyCbIlRaUHjWYWfWseREHjGYQu8sMOQdnu0",
    authDomain: "shopify-internship-26fec.firebaseapp.com",
    databaseURL: "https://shopify-internship-26fec.firebaseio.com",
    projectId: "shopify-internship-26fec",
    storageBucket: "shopify-internship-26fec.appspot.com",
    messagingSenderId: "113496552704405171831"
}



// // // Initialize Firebase
// // console.log(secrets.firebaseConfig)
firebase.initializeApp(config);
const db = firebase.firestore()
export const firebaseUsers = db.collection('users')
// firebase.analytics();

// export const db = firebase.firestore();

// export const ratings = db.collection('movies');

// import admin from 'firebase-admin'


// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// })