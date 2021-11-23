import firebase from "firebase";

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBsyY4jj50FvsMx1xExwzXUlNfBTARfepE",
    authDomain: "audio-tienda-react.firebaseapp.com",
    projectId: "audio-tienda-react",
    storageBucket: "audio-tienda-react.appspot.com",
    messagingSenderId: "297750300037",
    appId: "1:297750300037:web:a31fe0e40443a3b328b0ec"
  };


  const app = firebase.initializeApp(firebaseConfig);


  export function getFirestore(){
      return firebase.firestore(app)
  }