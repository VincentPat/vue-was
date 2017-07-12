<template>
    <div
        class="dock"
        :style="padding">
        <app
            v-for="(app, index) in appData"
            :style="getAppMargin(index)"
            :key="index"
            :appData="app">
        </app>
    </div>
</template>

<script>
import app from './app.vue'

export default {
    name: 'dock',
    components: {
        app
    },
    props: {
        appData: Array,
        gutter: String
    },
    computed: {
        padding() {
            return `padding-left: ${this.gutter};padding-right: ${this.gutter};`
        }
    },
    methods: {
        getAppMargin(index) {
            if (this.appData.length < 2) return ''
            return (index + 1) % 4 !== 0 ? `margin-right: ${this.gutter}` : '' 
        }
    }
}
</script>

<style lang="scss" scoped>
.dock {
    width: 100%;
    height: 94px;
    position: absolute;
    padding-top: 10px;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.35);
    text-align: center;
}
</style>