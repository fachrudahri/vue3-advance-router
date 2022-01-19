import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes'
import { store } from './stores'

createApp(App)
  .use(Router)
  .use(store)
  .mount('#app')
