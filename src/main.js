import { createApp } from 'vue'
import App from './App.vue'
import './style.css'  // Assurez-vous d'importer le CSS
import { Icon } from '@iconify/vue'
import Countup from 'vue-countup-v3'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init({duration:1000});
createApp(App).component('Icon', Icon).component('Countup', Countup).mount('#app')