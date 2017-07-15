<template>
    <div class="app-toolbar">
        <button class="app-toolbar__btn" @click="close">
            <i class="iconfont icon-close"></i>
        </button>
        <button class="app-toolbar__btn" @click="refresh">
            <i class="iconfont icon-refresh"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'appToolbar',
    methods: {
        close() {
            this.$emit('close')
        },
        refresh() {
            this.$emit('refresh')
        }
    }
}
</script>

<style lang="scss" scoped>
.app-toolbar {
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    padding: 0 20px;
    text-align: center;
    z-index: 1;
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
</style>