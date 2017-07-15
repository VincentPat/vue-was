<template>
    <div class="app-splash">
        <div
            class="app-splash__cnt"
            :style="position">
            <app-icon
                :icon="icon"
                :theme="theme"></app-icon>
        </div>
    </div>
</template>

<script>
import appIcon from './app-icon.vue'

export default {
    name: 'appSplash',
    components: {
        'app-icon': appIcon
    },
    props: {
        appData: Object,
        offset: Object
    },
    computed: {
        icon() {
            return this.appData ? this.appData.icon : null
        },
        theme() {
            return this.appData ? this.appData.theme : 'dark'
        },
        position() {
            const top = this.offset.top || (window.innerHeight / 2)
            const left = this.offset.left || (window.innerWidth / 2)
            const x = `${left / 60 * 100}%`
            const y = `${top / 60 * 100}%`
            return `transform: translate3d(${x}, ${y}, 0)`
        }
    }
}
</script>

<style lang="scss" scoped>
.app-splash {
    position: absolute;
    background: white;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    &__cnt {
        position: absolute;
        width: 60px;
        height: 60px;
        top: -30px;
        left: -30px;
        transition: transform ease-out .3s;
    }
}
</style>