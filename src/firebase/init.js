import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOyJH2NtiuAWoI1MLQxD9p9WxDorpsfbg",
    authDomain: "vuechat-8670e.firebaseapp.com",
    projectId: "vuechat-8670e",
    storageBucket: "vuechat-8670e.appspot.com",
    messagingSenderId: "468131383152",
    appId: "1:468131383152:web:dd7dfffa5da58279f831b5"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots:true})
  export default firebaseApp.firestore()
  