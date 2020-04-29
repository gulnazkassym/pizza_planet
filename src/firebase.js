import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCc1zUxr7J7A2bzfnhGoJKjysDvkiujwlU",
  authDomain: "pizza-planet-23984.firebaseapp.com",
  databaseURL: "https://pizza-planet-23984.firebaseio.com",
  projectId: "pizza-planet-23984",
  storageBucket: "pizza-planet-23984.appspot.com",
  messagingSenderId: "827623296394",
  appId: "1:827623296394:web:76bfb7bc65835024038c73"
}

firebase.initializeApp(config)
const db = firebase.firestore()

export const dbMenuRef = db.collection('menu')