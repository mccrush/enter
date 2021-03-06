import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { auth } from './firebase'

let app
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
  if (user) {
    //store.dispatch("logIn");
  }
})