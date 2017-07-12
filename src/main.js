import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Desktop from './components/desktop.vue'
import AppSrc from './app-src.js'
import EventBus from './event-bus.js'

import './styles/main.scss'

Vue.use(VueAwesomeSwiper)
Vue.use(EventBus)

new Vue({
    el: '#app',
    render: h => h(Desktop, {
        props: {
            appData: AppSrc
        }
    })
})
