import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/vee-validate/rules'
import '@/plugins/vee-validate/messages'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
