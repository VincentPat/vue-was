import Vue from 'vue'

import './styles/main.scss'

new Vue({
    el: '#app',
    render: h => h('div', {
        class: {
            about: true
        }
    }, [
        h('h1', {
            domProps: {
                innerText: 'vue-was'
            }
        })
    ])
})
