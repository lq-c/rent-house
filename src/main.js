import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import {
  // create naive ui
  create,
  // component
  NButton,
  NInput,
  NFormItem,
  NIcon,
  NMenu
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NInput,
    NFormItem,
    NIcon,
    NMenu
]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
