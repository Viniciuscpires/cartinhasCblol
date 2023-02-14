import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'

import App from './App.vue'
import './style.css'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
