import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper from './components/swiper.vue'
import AppSrc from './app-src.js'

import './styles/main.scss'

Vue.use(VueAwesomeSwiper)

new Vue({
    el: '#app',
    render: h => h(Swiper, {
        props: {
            appData: AppSrc
        }
    })
})
