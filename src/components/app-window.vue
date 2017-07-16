<template>
    <div class="app-window">
        <!-- iframe -->
        <iframe :src="iframeSrc" frameborder="0" class="app-window__iframe"></iframe>
        <!-- 工具栏 -->
        <app-toolbar
            @close="close"
            @refresh="refresh"
            @link="link"
            @github="github"></app-toolbar>
    </div>
</template>

<script>
import appToolbar from './app-toolbar.vue'

export default {
    name: 'appWindow',
    components: {
        'app-toolbar': appToolbar
    },
    props: {
        appData: Object
    },
    data() {
        return {
            iframeSrc: null
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        refresh() {
            this.iframeSrc = null
            setTimeout(() => {
                this.iframeSrc = this.appData ? this.appData.src : null
            }, 100)
        },
        link() {
            if (this.appData && this.appData.link) location.href = this.appData.link
        },
        github() {
            if (this.appData && this.appData.github) location.href = this.appData.github
        }
    },
    watch: {
        appData(value) {
            this.iframeSrc = this.appData ? this.appData.src : null
        }
    }
}
</script>

<style scoped lang="scss">
.app-window {
    width: 100vw;
    height: 100vh;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    padding-bottom: 50px;
    &__iframe {
        width: 100%;
        height: 100%;
    }
}
</style>