import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBm5DF-UOvZTFOcI5ryh6tOu4A9_7CtFBc",
  authDomain: "priyeshchatapp.firebaseapp.com",
  projectId: "priyeshchatapp",
  storageBucket: "priyeshchatapp.appspot.com",
  messagingSenderId: "390610090230",
  appId: "1:390610090230:web:7d646f3b1faabbf53214d7",
  measurementId: "G-92K5LHP33H"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
