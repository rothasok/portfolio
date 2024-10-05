import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index.js'
import i18n from "@/i18n/index.js"
import pinia from '@/store/index.js'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);


// import pinia from '@/store/index.js'
// import i18n from "@/i18n/index.js"
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
