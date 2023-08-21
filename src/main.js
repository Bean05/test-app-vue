import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


firebase.initializeApp(
  {
    apiKey: "AIzaSyDBqvrciXItIqDYq5az7oVSYQNGUd10vBM",
    authDomain: "vue-bas-bec11.firebaseapp.com",
    projectId: "vue-bas-bec11",
    storageBucket: "vue-bas-bec11.appspot.com",
    messagingSenderId: "75322381999",
    appId: "1:75322381999:web:964b9e6bc647208bcca65a",
    measurementId: "G-W6RETWFGKN"
  }

)


let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
})

