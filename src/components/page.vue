<template>
    <section
        class="page"
        :style="padding">
        <app
            v-for="(app, index) in pageData"
            :style="getAppMargin(index)"
            :key="index"
            :appData="app">
        </app>
    </section>
</template>

<script>
import app from './app.vue'

export default {
    name: 'page',
    components: {
        app
    },
    props: {
        pageData: Array,
        gutter: String
    },
    computed: {
        padding() {
            return `padding: ${this.gutter}`
        }
    },
    methods: {
        getAppMargin(index) {
            return (index + 1) % 4 !== 0 ? `margin-right: ${this.gutter}` : '' 
        }
    }
}
</script>