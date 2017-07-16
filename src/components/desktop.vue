<template>
    <div
        class="desktop"
        :style="bg">
        <!-- 滑动器 -->
        <vw-swiper
            :appData="appData.apps"
            :gutter="gutter"
            ref="vwSwiper"></vw-swiper>
        <!-- Dock -->
        <dock
            :appData="appData.dock"
            :gutter="gutter"
            ref="dock"></dock>
        <!-- App Splash -->
        <!-- 闪屏 -->
        <transition
            name="fade"
            @before-enter="setIconPosition"
            @after-enter="splashCountDown">
            <app-splash
                v-show="showSplashScreen"
                :offset="currentIconPosition"
                :appData="currentAppData"
                ref="splash"></app-splash>
        </transition>
        <!-- App Window -->
        <transition
            name="fade"
            @after-leave="closeCallback">
            <app-window
                @close="closeAppWindow"
                :appData="currentAppData"
                v-show="showAppWindow"
                ref="window"></app-window>
        </transition>
    </div>
</template>

<script>
import vwSwiper from './swiper.vue'
import dock from './dock.vue'
import appWindow from './app-window.vue'
import appSplash from './app-splash.vue'

export default {
    name: 'desktop',
    components: {
        'vw-swiper': vwSwiper,
        dock,
        'app-window': appWindow,
        'app-splash': appSplash
    },
    props: {
        appData: Object
    },
    data() {
        return {
            bgIndex: Math.ceil(Math.random() * 6),
            showAppWindow: false,
            currentAppData: null,
            showSplashScreen: false,
            currentIconPosition: {}
        }
    },
    computed: {
        bg() {
            return `background-image: url("./dist/static/bgs/${this.bgIndex}.jpg");`
        },
        gutter() {
            const gutter = (window.innerWidth - 240) / 5
            return `${gutter}px`
        }
    },
    methods: {
        closeAppWindow() {
            this.showAppWindow = false
        },
        closeCallback() {
            this.currentAppData = null
        },
        splashCountDown() {
            // 显示App Window
            this.showAppWindow = true
            // 使闪屏图标居中
            const top = window.innerHeight / 2
            const left = window.innerWidth / 2
            this.currentIconPosition = { top, left }
            // 开始计时
            setTimeout(() => {
                this.showSplashScreen = false
            }, 2000)
        },
        setIconPosition() {
            const top = this.currentAppData.el.offsetTop + 30
            const left = this.currentAppData.el.offsetLeft + 30
            this.currentIconPosition = { top, left }
        }
    },
    mounted() {
        this.$event.$on('openApp', (appData) => {
            this.currentAppData = appData
            this.showSplashScreen = true
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