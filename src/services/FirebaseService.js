import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCUz7Oo6Z_6Qos93zjVtJGvaFGf4F8HYY8",
    authDomain: "ssafy8-webmobile.firebaseapp.com",
    databaseURL: "https://ssafy8-webmobile.firebaseio.com",
    projectId: "ssafy8-webmobile",
    storageBucket: "ssafy8-webmobile.appspot.com",
}

firebase.initializeApp(config)
const firestore = firebase.firestore()
const fireauth = firebase.auth()
const firedb = firebase.database()

export default {
    
}