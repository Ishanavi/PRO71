import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
  apiKey: "AIzaSyB7v_di7KTxf8qiYui-mSg0RlcJxbYOkjw",
  authDomain: "pro71-bc0a1.firebaseapp.com",
  databaseURL:"https://pro71-bc0a1.firebaseio.com",
  projectId: "pro71-bc0a1",
  storageBucket: "pro71-bc0a1.appspot.com",
  messagingSenderId: "221370096202",
  appId: "1:221370096202:web:22cd365e53f93cd0e6e4b3"
};
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

