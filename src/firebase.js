
import firebase from "firebase";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChZXu4wWMhW_-Ci3RmeAUyTr5eqVUAWPY",
  authDomain: "personal-project-data.firebaseapp.com",
  databaseURL: "https://personal-project-data.firebaseio.com",
  projectId: "personal-project-data",
  storageBucket: "personal-project-data.appspot.com",
  messagingSenderId: "760672493737",
  appId: "1:760672493737:web:824e914992ec9b16c009b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const providers = {
  google: new firebase.auth.GoogleAuthProvider()
}

export const firestore = firebase.firestore();

export default firebase;