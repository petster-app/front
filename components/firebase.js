import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: "AIzaSyBGQ6NIc4_oolaT-YzrKZGLlLhXr8fsOWc",
  authDomain: "petster-test.firebaseapp.com",
  databaseURL: "https://petster-test.firebaseio.com",
  projectId: "petster-test",
  storageBucket: "petster-test.appspot.com",
  messagingSenderId: "544087589053",
  appId: "1:544087589053:web:547668da4e72bfc945f7d4",
  measurementId: "G-XJ5LF8ZHMC"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }

  addQuote(quote) {
    if(!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return this.db.doc(`petster_users/${this.auth.currentUser.uid}`).set({
      quote
    })
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }

  async getCurrentUserQuote() {
    const quote = await this.db.doc(`petster_users/${this.auth.currentUser.uid}`).get()
    return quote.get('quote')
  }
}

export default new Firebase()