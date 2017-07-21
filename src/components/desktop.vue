<template>
    <div
        class="desktop"
        :style="bg">
        <!-- 闪屏 -->
        <transition name="fade">
            <div class="desktop__splash" v-show="!inited">
                <div
                    class="desktop__splash__content"
                    :class="{show: showAppLogo}">
                    <img :src="logo">
                    <p>{{ appTitle }}</p>
                </div>
            </div>
        </transition>
        <!-- 滑动器 -->
        <vw-swiper
            :appData="appData.apps"
            :gutter="gutter"
            ref="vwSwiper"></vw-swiper>
        <!-- Dock -->
        <!-- <dock
            :appData="appData.dock"
            :gutter="gutter"
            ref="dock"></dock> -->
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
// import dock from './dock.vue'
import appWindow from './app-window.vue'
import appSplash from './app-splash.vue'

import logo from '../../static/logo.png'

export default {
    name: 'desktop',
    components: {
        'vw-swiper': vwSwiper,
        // dock,
        'app-window': appWindow,
        'app-splash': appSplash
    },
    props: {
        appData: Object
    },
    data() {
        return {
            inited: false,
            bgIndex: Math.ceil(Math.random() * 6),
            showAppWindow: false,
            currentAppData: null,
            showSplashScreen: false,
            currentIconPosition: {},
            logo,
            appTitle: '',
            appTitleIndex: 0,
            appTitleInterval: null,
            showAppLogo: false,
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
        },
        showAppTitle() {
            this.appTitleInterval = setInterval(() => {
                this.appTitle += this.appData.appTitle[this.appTitleIndex++]
                if (this.appTitleIndex >= this.appData.appTitle.length) {
                    clearInterval(this.appTitleInterval)
                    this.appTitleInterval = null
                    setTimeout(() => {
                        this.inited = true
                    }, 1200)
                }
            }, 100)
        }
    },
    mounted() {
        this.$event.$on('openApp', (appData) => {
            this.currentAppData = appData
            this.showSplashScreen = true
        })
        setTimeout(() => {
            this.showAppLogo = true
            setTimeout(() => {
                this.showAppTitle()
            }, 800)
        }, 500)
    }
}
</script>

<style scoped lang="scss">
.desktop {
    width: 100vw;
    height: 100vh;
    // padding-bottom: 94px;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &__splash {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background: white;
        &__content {
            width: 200px;
            height: 240px;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -100px;
            margin-top: -120px;
            transition: opacity ease-out .5s;
            opacity: 0;
            &.show {
                opacity: 1;
            }
            img {
                width: 100px;
                height: 100px;
            }
            p {
                margin: 0;
                margin-top: 20px;
                font-weight: bold;
                font-size: 20px;
                line-height: 24px;
                &:after {
                    content: "";
                    display: inline-block;
                    width: 1px;
                    height: 18px;
                    background: #222222;
                    vertical-align: middle;
                    margin-left: 4px;
                    margin-top: -3px;
                    animation-name: bling;
                    animation-duration: .6s;
                    animation-direction: alternate;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
            }
        }
    }
}

@keyframes bling {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
}
</style>