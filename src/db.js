import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN8L79wdvuCzXAqhMKzdVF5nGWpgK_Xgc",
  authDomain: "forestry-b9062.firebaseapp.com",
  databaseURL: "https://forestry-b9062.firebaseio.com",
  projectId: "forestry-b9062",
  storageBucket: "forestry-b9062.appspot.com",
  messagingSenderId: "660999964543",
  appId: "1:660999964543:web:11aedf6e804d4d3cb4fc4a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
