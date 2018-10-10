import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyALNMN4uJBkReX9jGqsJTQGjlKP8z_1OXI',
  authDomain: 'qamified-web-sp.firebaseapp.com',
  databaseURL: 'https://qamified-web-sp.firebaseio.com',
  projectId: 'qamified-web-sp',
  storageBucket: 'qamified-web-sp.appspot.com',
  messagingSenderId: '381984837324'
})

export const auth = firebaseApp.auth()
