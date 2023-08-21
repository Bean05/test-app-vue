import firebase from 'firebase/compat/app';

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (err) {
        throw err
      }

    }
  },
  async register({ }, { email, pass }) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (err) {
      throw err
    }
  },
  async logout() {
    await firebase.auth().signOut()
  }
}