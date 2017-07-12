<template>
    <div
        class="desktop"
        :style="bg">
        <!-- 滑动器 -->
        <vw-swiper
            :appData="appData.apps"
            :gutter="gutter"></vw-swiper>
        <!-- Dock -->
        <dock
            :appData="appData.dock"
            :gutter="gutter"></dock>
        <!-- App Window -->
        <app-window
            @close="closeAppWindow"
            :src="currentAppSrc"
            :show="showAppWindow"></app-window>
    </div>
</template>

<script>
import vwSwiper from './swiper.vue'
import dock from './dock.vue'
import appWindow from './app-window.vue'

export default {
    name: 'desktop',
    components: {
        'vw-swiper': vwSwiper,
        dock,
        'app-window': appWindow
    },
    props: {
        appData: Object
    },
    data() {
        return {
            bgIndex: Math.ceil(Math.random() * 6),
            showAppWindow: false,
            currentAppSrc: null
        }
    },
    computed: {
        bg() {
            return `background-image: url("/dist/static/bgs/${this.bgIndex}.jpg");`
        },
        gutter() {
            const gutter = (window.innerWidth - 240) / 5
            return `${gutter}px`
        }
    },
    methods: {
        closeAppWindow() {
            this.showAppWindow = false
            this.currentAppSrc = null
        }
    },
    mounted() {
        this.$event.$on('openApp', (appData) => {
            this.currentAppSrc = appData.src
            this.showAppWindow = true
        })
    }
}
</script>

<style scoped lang="scss">
.desktop {
    width: 100vw;
    height: 100vh;
    padding-bottom: 94px;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>