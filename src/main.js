import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'

//using provide
const app = createApp({})
app.provide()

createApp(App).mount('#app')
