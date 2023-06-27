import '@mdi/font/css/materialdesignicons.css'
import './scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuetify({
  theme: {
    // defaultTheme: 'dark',
  },
  defaults: {
    VBtn: {
      variant: 'flat',
    },
  },
}))

app.mount('#app')
