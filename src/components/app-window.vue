<template>
    <div class="app-window" v-show="show">
        <iframe :src="url" frameborder="0" class="app-window__iframe"></iframe>
        <div class="app-window__toolbar">
            <button class="app-window__toolbar__btn" @click="close">
                <i class="iconfont icon-close"></i>
            </button>
            <button class="app-window__toolbar__btn" @click="refresh">
                <i class="iconfont icon-refresh"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'appWindow',
    props: {
        src: String,
        show: Boolean
    },
    computed: {
        url() {
            return this.src || null
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
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    &__iframe {
        width: 100%;
        height: 100%;
    }
    &__toolbar {
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 44px;
        line-height: 44px;
        padding: 0 20px;
        text-align: center;
        &__btn {
            color: white;
            line-height: 44px;
            width: 44px;
            border: none;
            outline: none;
            background: transparent;
            margin-right: 20px;
            .iconfont {
                font-size: 24px;
                font-weight: bold;
            }
            &:last-child {
                margin-right: 0px;
            }
        }
    }
}
</style>