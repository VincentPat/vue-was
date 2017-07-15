<template>
    <div class="app-window">
        <!-- iframe -->
        <iframe :src="url" frameborder="0" class="app-window__iframe"></iframe>
        <!-- 工具栏 -->
        <app-toolbar
            @close="close"
            @refresh="refresh"></app-toolbar>
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
    computed: {
        url() {
            return this.appData ? this.appData.src : null
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        refresh() {
            const iframe = this.$el.querySelectorAll('iframe')[0]
            iframe.src = ''
            setTimeout(() => {
                iframe.src = this.url
            }, 100)
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
    &__iframe {
        width: 100%;
        height: 100%;
    }
}
</style>